from os import pardir
import re
from flask import Flask,request,make_response,jsonify
from flask_cors import CORS
import secrets
import hashlib
from flask_cors.core import LOG

from werkzeug.wrappers import response
import dabaBase
import sqlite3
app = Flask(__name__)
CORS(app)
USER_TABLE_COLUMNS = ('full_name','email','token','password')
BOOKS_TABLES_COLUMNS = ('bookid','description','name','estimation','price','img','discount')
USER_BOOKS_CULUMNS = ('user_id','book_id')
class User(dabaBase.DataBase):
   def __init__(self,columns,table_name):
      super().__init__(columns,table_name)

   def Register(self,values_dict):
      if not bool(self.SelectedTableItems('email',values_dict["email"])):
         values_dict["token"] = self.GeneRateTocken()
         values_dict["password"] = self.HashPassword(values_dict["password"])
         self.AddTableItem(tuple([values_dict[name] for name in self.TABLE_COLUMS]))
         return values_dict["token"]
      return False

   def HashPassword(self,password):
      password = password + '123123awdawd'
      hash_object = hashlib.sha1(password.encode())
      hex_dig = hash_object.hexdigest()
      return hex_dig

   def Authorization(self,date):
      user = self.SelectedTableItems('email',date['email'])[0]
      if not bool(user):
         return False
      if self.HashPassword(date['password']) != user[4]:
         return False
      return user[3]

   def GeneRateTocken(self):
      return secrets.token_hex(25)

   def CheckedToken(self,token):
      return self.SelectedTableItems('token',token)

   def AuthFromPassword(self,date):
      isEmail = self.SelectedTableItems('email',date['email'])
      if not isEmail:
         return False
      if isEmail[0][4] == self.HashPassword(date['pass']):
         return isEmail[0][3]
      return False

class Books(dabaBase.DataBase):
   def __init__(self,columns,table_name):
      super().__init__(columns,table_name)
   def GetFullBooks(self):
      full_books = self.SelectedTableAll()
      result_dict = []
      for book_item in full_books:
         result_dict.append({ key:book_item[indx] for indx,key in  enumerate(BOOKS_TABLES_COLUMNS)})
      return result_dict

class UserBooks(dabaBase.DataBase):
   def __init__(self,columns,table_name):
      super().__init__(columns,table_name)

   def AddBookUserItem(self, user_id, book_id):
      self.AddTableItem((user_id,book_id))

   def GetAllUserBooks(self,user_id):
      return self.SelectedTableItems('user_id',user_id)

   

user_one = User(USER_TABLE_COLUMNS,'users')
books_one = Books(BOOKS_TABLES_COLUMNS,'books')
books_user = UserBooks(USER_BOOKS_CULUMNS,'UsersProducts')
@app.route('/')
def index():
    return 'Hello World'

@app.route('/api/v1/register',methods=['POST'])
def register():
    post_values = request.json
    register = user_one.Register({'email':post_values['email'],'password':post_values['password'],'full_name':post_values['full_name']})
    if not register:
      return make_response("<h2>404 Error</h2>", 400)
    return jsonify({'status':201,'token':register})


@app.route('/api/v1/auth',methods=['POST'])
def auth():
   if  'Authorization' in request.headers:
      user_date =  user_one.SelectedTableItems('token',request.headers['Authorization'])
      if not user_date:
         return make_response("<h2>404 Error</h2>", 404)
      return jsonify({key:user_date[0][1:][indx] for indx,key in enumerate(USER_TABLE_COLUMNS) })
   result_auth =  user_one.AuthFromPassword(request.json)
   print(result_auth)
   if result_auth:
      return jsonify({'token':result_auth})
   return make_response("<h2>404 Error</h2>", 404)


@app.route('/api/v1/books')
def books():
   return jsonify(books_one.GetFullBooks())

@app.route('/api/v1/AddProduct')
def addBook():
   result_auth = user_one.CheckedToken(request.headers['Authorization'])
   if not result_auth:
      return make_response("<h2>404 Error</h2>", 404)
   books_user.AddBookUserItem(result_auth[0][0], request.args['product_id'])
   return jsonify("<h2>Всё хорошо</h2> 201")

@app.route('/api/v1/cartbooks')
def CartBooks():
   result_auth = user_one.CheckedToken(request.headers['Authorization'])
   if not result_auth:
      return make_response("<h2>404 Error</h2>", 403)
   all_user_books = books_user.GetAllUserBooks(result_auth[0][0])
   return jsonify([ elem[2] for elem in all_user_books])
@app.route('/api/v1/delete')
def DeleteBook():
   books_user.RemoveTableItem('book_id',request.args['book_id'])
   print()
   return make_response("<h2>404 Error</h2>", 203)

if __name__ == "__main__":
    app.run(debug=True)