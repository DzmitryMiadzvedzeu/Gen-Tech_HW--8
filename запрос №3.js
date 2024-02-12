db.users.updateMany(
    { country : { $ne : "Germany" }},
        {
        $set : {is_blocked : false}
    }
)