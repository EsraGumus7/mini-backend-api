/**
 * Kullanıcı profili getir
 * GET /api/users/profile
 * Protected: Token gerekli
 */
const getProfile = async (req, res, next) => {
  try {
    // authMiddleware'den gelen kullanıcı bilgisi
    const user = req.user;

    res.json({
      success: true,
      data: {
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProfile
};

