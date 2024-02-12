db.users.find(
    {
        $and : [{is_blocked : {$ne : true}},{country : {$in : ["Germany", "USA"]}}]
    }
)