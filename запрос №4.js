db.users.updateMany(
    {
        $and : [{is_blocked : {$eq : false}},{country : {$nin : ["Germany"]}}]
    },
    {
        $inc: { balance: +150 }
    }
)