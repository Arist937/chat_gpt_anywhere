import logging
import openai

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

logging.basicConfig(
  level=logging.INFO,
  format="[%(asctime)s] {%(filename)s:%(lineno)d} %(levelname)s - %(message)s",
)
logger = logging.getLogger()

@app.route("/")
def hello():
  openai.organization = "org-Cj5Wv0tLOhE6JgC0XH9miDI7"
  openai.api_key = ""
  models = openai.Model.list()
    
  return models

if __name__ == "__main__":
  app.run()