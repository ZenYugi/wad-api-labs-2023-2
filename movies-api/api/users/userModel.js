import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';


const Schema = mongoose.Schema;

//... Code as before

const MovieSchema = new Schema({
  id: Number,
  title: String
});

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true },
  favourites: [MovieSchema]
});

UserSchema.methods.comparePassword = function (passw, callback) {
  bcrypt.compare(passw, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};


//Find a user based on their username
UserSchema.statics.findByUserName = function (username) {
  return this.findOne({ username: username });
};


//These updates to the User Schema define a pre-save hook that encrypts the password property before it is saved or updated. Also, the comparePassword() instance method can be used to authenticate users using encrypted passwords.

UserSchema.pre('save', function(next) {
  const user = this;
  if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, (err, salt)=> {
          if (err) {
              return next(err);
          }
          bcrypt.hash(user.password, salt, null, (err, hash)=> {
              if (err) {
                  return next(err);
              }
              user.password = hash;
              next();
          });
      });
  } else {
      return next();
  }
});



// ..code as before


export default mongoose.model('User', UserSchema);
