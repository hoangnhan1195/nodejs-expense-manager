db.createUser(
    {
        user : "nhan",
        pwd : "matkhau456",
        roles : [
            {
                role : "readWrite",
                db : "expense-manager"
            }
        ]

    }
)