import sqlite3

DATA_BASE_NAME = 'books.db'
conn = sqlite3.connect(DATA_BASE_NAME)
cur = conn.cursor()
cur.execute("""CREATE TABLE IF NOT EXISTS users(
   userid INTEGER PRIMARY KEY AUTOINCREMENT,
   full_name TEXT,
   email TEXT,
   token TEXT,
   password TEXT
   );
""")

cur.execute("""CREATE TABLE IF NOT EXISTS books(
   bookid INTEGER PRIMARY KEY AUTOINCREMENT,
   description TEXT,
   name TEXT
   );
""")

cur.execute("""CREATE TABLE IF NOT EXISTS UsersProducts(
    UsersProductsId INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    book_id INTEGER,
    cnt INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(userid),
    FOREIGN KEY (book_id) REFERENCES books(id)
   );
""")

conn.commit()
conn.close()

class DataBase:
   def __init__(self,columns,table_name):
      self.TABLE_COLUMS = columns
      self.TABLE_NAME = table_name
   def ConnectDataBase(function):
      def wrapped(*args,**kwargs):
         try:
            sqlite_connection = sqlite3.connect(DATA_BASE_NAME)
            cursor = sqlite_connection.cursor()
            cursor.execute(function(*args,**kwargs))
            sqlite_connection.commit()
            return cursor.fetchmany()
         except sqlite3.Error as error:
            print("Ошибка при подключении к sqlite", error)
            return False
         finally:
            cursor.close()
            if (sqlite_connection):
               sqlite_connection.close()
               print("Соединение с SQLite закрыто")
      return wrapped

   @ConnectDataBase
   def AddTableItem(self,date):
      return f"""INSERT INTO {self.TABLE_NAME}
               ({self.TypleToStr(self.TABLE_COLUMS)})
               VALUES ({"'" +  "', '".join(map(str, date)) + "'"});"""

   def TypleToStr(self,typle_date):
      return ", ".join(map(str, typle_date))
   
   def RemoveTableItem(self):
      pass

   def ChangeTableItem(self):
      pass

   @ConnectDataBase
   def SelectedTableItems(self,params_name,paraps_value):
      return f"""SELECT * FROM {self.TABLE_NAME} WHERE {params_name} = "{paraps_value}" """