{
    "$schema" : "http://json-schema.org/schema#",

    "title" : "AuthorizationMessages",
    "id" : "http://opensimulator.org/dispatcher/AuthorizationMessages#",

    "definitions" :
    {
        "CreateCapabilityRequest" :
        {
            "id" : "#CreateCapabilityRequest",
            "description" : "Request the creation of a capability to be used for further operations",
            "type" : "object",
            "properties" :
            {
                "UserID" :
                {
                    "description" : "UUID of the user requesting the capability",
                    "type" : "string",
                    "format" : "UUID"
                },

                "FirstName" :
                {
                    "description" : "First name of the user requesting the capability",
                    "type" : "string"
                },

                "LastName" :
                {
                    "description" : "Last name of the user requesting the capability",
                    "type" : "string"
                },

                "EmailAddress" :
                {
                    "description" : "Email address of the user requesting the capability",
                    "type" : "string"
                },

                "HashedPassword" :
                {
                    "description" : "The users md5 hashed password",
                    "type" : "string",
                    "required" : true
                },

                "LifeSpan" :
                {
                    "description" : "The requested life span of the capability",
                    "type" : "integer",
                    "default" : 360,
                    "required" : true
                },

                "DomainList" :
                {
                    "type" : "array",
                    "items" : { "type" : "string" },
                    "required" : true
                }
            }
        },
        
        "RenewCapabilityRequest" :
        {
            "id" : "#RenewCapabilityRequest",
            "description" : "Request message for renewing the lifespan of a valid capability, the capability is provided in the message base",
            "type" : "object",
            "properties" :
            {
                "LifeSpan" :
                {
                    "description" : "The requested life span of the capability",
                    "type" : "integer",
                    "required" : true
                }
            }
        },


        "DestroyCapabilityRequest" :
        {
            "id" : "#DestroyCapabilityRequest",
            "type" : "object",
            "description" : "Request message for destroying an existing capability, the capability is provided in the message base",
            "properties" : { }
        },

        "CreateCapabilityResponse" :
        {
            "id" : "#CreateCapabilityReponse",
            "description" : "Response to the CreateCapabilityRequest message containing a valid capability",
            "type" : "object",
            "properties" :
            {
                "Capability" :
                {
                    "description" : "UUID of the capability",
                    "type" : "string",
                    "format" : "UUID",
                    "required" : true
                },

                "LifeSpan" :
                {
                    "description" : "The requested life span of the capability",
                    "type" : "integer",
                    "required" : true
                }
            }
        }
    }
}
                    
        