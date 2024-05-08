import {Schema, model, models} from 'moongoose';

const PropertySchema = new Schema({
    
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    location: {
        street: {type: String},
        city: {type: String},
        state: {type: String},
        zipcode: {type: String}
    },
    beds: {type: Number},
    baths: {type: Number},
    square_feet: {type: Number},
    amenities: [
        {type: String}
    ],
    rates: {
        nightly: {type: Number},
        weekly: {type: Number},
        monthly: {type: Number}
    },
    seller_info: {
        name: {type: String},
        email: {type: String},
        phone: {type: String}

    },
    images: [
        {
            type: String
        }
    ],
    is_featured: 
    {type: Boolean, default: false},
    timestamps: true
})