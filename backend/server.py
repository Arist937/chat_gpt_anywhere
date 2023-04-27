import os
import logging
import openai

from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

logging.basicConfig(
    level=logging.INFO,
    format="[%(asctime)s] {%(filename)s:%(lineno)d} %(levelname)s - %(message)s",
)
logger = logging.getLogger()


@app.route("/complete_chat", methods=["POST"])
def complete_chat():
    user_input = request.json["user_input"]

    openai.organization = os.getenv("ORGANIZATION")
    openai.api_key = os.getenv("OPENAI_API_KEY")

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo", messages=[{"role": "user", "content": f"{user_input}"}]
    )

    message = response["choices"][0]["message"]["content"]

    logger.info(message)
    return {"message": message}


if __name__ == "__main__":
    app.run()
