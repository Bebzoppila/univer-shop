from flask import Flask,request,make_response,jsonify
from flask_cors import CORS
import secrets
import hashlib
import dabaBase
app = Flask(__name__)
CORS(app)

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
      hash_object = hashlib.sha1(password.encode())
      hex_dig = hash_object.hexdigest()
      return hex_dig

   def Authorization(self,date):
      user = self.SelectedTableItems('email',date['email'])
      if not bool(user):
         return False
      if self.HashPassword(date['password']) != user[0][4]:
         return False
      return user[0][3]

   def GeneRateTocken(self):
      return secrets.token_hex(25)

@app.route('/')
def index():
    return 'Hello World'

@app.route('/api/v1/register',methods=['POST'])
def register():
    post_values = request.json
    test_1 = User(('full_name','email','token','password'),'users')
    register = test_1.Register({'email':post_values['email'],'password':post_values['password'],'full_name':post_values['full_name']})
    if not register:
      return make_response("<h2>404 Error</h2>", 400)
    return jsonify({'status':201,'token':register})

if __name__ == "__main__":
    app.run(debug=True)