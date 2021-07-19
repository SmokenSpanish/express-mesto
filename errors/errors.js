const notFoundError = (res) => {
  res.status(404).send({ message: 'ресурс не найден' });
};

const badRequestError = (res, err) => {
  res.status(400).send({
    message: `${Object.values(err.errors)
      .map((error) => error.message).join(', ')}`,
  });
};

const internalServerError = (res) => {
  res.status(500).send({ message: 'Внутренняя ошибка сервера' });
};

const getError = (res, err) => {
  if (err.name === 'CastError') {
    res.status(400).send({ message: 'ресурс не найден' });
  } else if (err.name === 'ValidationError') {
    badRequestError(res, err);
  } else {
    internalServerError(res);
  }
};

module.exports = {
  notFoundError,
  badRequestError,
  internalServerError,
  getError,
};
