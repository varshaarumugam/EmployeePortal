export const validation = {
  password: {
    presence: {
      message: 'Please enter a password',
    },
    length: {
      minimum: {
        value: 3,
        message: 'Your password must be at least 3 characters',
      },
    },
  },
  userName: {
    presence: {
      message: 'Please enter a userName',
    },
    length: {
      minimum: {
        value: 3,
        message: 'Your userName must be at least 3 characters',
      },
    },
  },
};

export function validate (nameField, value) {
  let resp = [null, null];

  if (validation.hasOwnProperty (nameField)) {
    console.log ('validation');
    let v = validation[nameField];
    if (value == '' || value == null) {
      resp[0] = false;
      resp[1] = v['presence']['message'];
    } else if (
      v.hasOwnProperty ('format') &&
      !v['format']['pattern'].test (value)
    ) {
      resp[0] = false;
      resp[1] = v['format']['message'];
    } else if (v.hasOwnProperty ('length')) {
      let l = v['length'];
      if (
        l.hasOwnProperty ('minimum') &&
        value.length < l['minimum']['value']
      ) {
        resp[0] = false;
        resp[1] = l['minimum']['message'];
      } else if (
        l.hasOwnProperty ('maximum') &&
        value.length < l['maximum']['value']
      ) {
        resp[0] = false;
        resp[1] = l['maximum']['message'];
      }
    } else {
      resp[0] = true;
    }
  } else {
    resp[0] = true;
  }
  return resp;
}
