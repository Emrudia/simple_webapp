import { Router } from 'express';

const router = Router();

app.get('/simple_webapp', function(req, res) {
  res.send('hello world');
});
