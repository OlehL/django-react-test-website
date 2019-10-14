# django-react-test-website

## Quick Start
-Backend
```bash
# Install pipenv
pip install pipenv

# Install dependencies
pipenv install --ignore-pipfile

# Activate virtual environment
pipenv shell

# Serve API on http://127.0.0.1:8000
python website/manage.py runserver
```

-Frontend
```bash
# Go to frontend dir
cd website
cd frontend

# Install yarn
npm i -g yarn

# Install dependencies
yarn

# frontend devserver on http://127.0.0.1:3000
yarn start

# Run webpack for dev
yarn webpackdev

# Build for production
yarn webpackbuild
```