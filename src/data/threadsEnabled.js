async function getBlockStatus(userId) {
  const row = await knex('dStatus')
    .where('user_id', userId)
    .first();

  return {
    isBlocked: !! row,
    expiresAt: row && row.expires_at
  };
}

