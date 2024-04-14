from fastapi import FastAPI
from authlib.integrations.starlette_client import OAuth
from starlette.requests import Request

import logging
import sys
log = logging.getLogger('authlib')
log.addHandler(logging.StreamHandler(sys.stdout))
log.setLevel(logging.DEBUG)

oauth = OAuth()
oauth.register(
    'keycloak',
    client_id='fastapi',
    client_secret='kpTa1Nh40xnMoLyZtD5zh34j8Cny3C7l',
    server_metadata_url='https://sample.test/keycloak/realms/sample/.well-known/openid-configuration',
    client_kwargs={'scope': 'openid email profile'},
)

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.route("/login")
async def login(request: Request):
    keycloak = oauth.create_client('keycloak')
    redirect_uri = request.url_for('callback')
    return await keycloak.authorize_redirect(request, redirect_uri) # type: ignore

@app.route("/callback")
async def callback(request: Request):
    keycloak = oauth.create_client('keycloak')
    token = await keycloak.authorize_access_token() # type: ignore
    return token
