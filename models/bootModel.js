// Cargamos el módulo de mongoose
const mongoose =  require('mongoose');

// Usaremos los esquemas
const { Schema } = mongoose;

// Creamos el objeto del esquema y sus atributos
const bootSchema = new Schema({
   name: String,
   description: String,
   type: String,
   image: String,
   modifiers: {
      intelligence: Number,
      dexterity: Number,
      constitution: Number,
      insanity: Number,
      charisma: Number,
      strength: Number
    },
   min_lvl: Number,
   profiles: [{type: Schema.Types.ObjectId, ref: "Profile"}]

});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Boot', bootSchema);