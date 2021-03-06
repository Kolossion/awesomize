

const isArrayOfFunction = (v) =>
  [ v.isArray
  , v.listOf(v.isFunction)
  ]
;


module.exports = (v) => {
  return {
    read: {
      validate: [ v.isFunction ]
    }
  , sanitize: {
      validate: isArrayOfFunction(v)
    }
  , validate: {
      validate: isArrayOfFunction(v)
    }
  , normalize: {
      validate: isArrayOfFunction(v)
    }
  };
};
