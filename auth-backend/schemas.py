from pydantic import BaseModel

class UserLogin(BaseModel):
  id : int
  name : str
  email : str
  password : str
