db.tracks.find(
    {
        duration_secs: { $gte: 5 * 60, $lte: 15 * 60 }
    }
)