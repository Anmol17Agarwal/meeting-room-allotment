const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
        organization: {
            location: {
                officeFloor: {
                    type: "string",
                    required: true
                  },
                type: "string",
                required: true
              },
          type: "string",
          required: true
        },
        
        meetingRoom: {
            timeSlot: {
                type: "date",
                required: true
              },
          type: "number",
          required: true
        },
        refreshToken: String   //Not required yet using , need explaination
      
});
module.export = mongoose.model('User',userSchema);