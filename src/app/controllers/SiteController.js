class SiteController {
  // [GET] /news
  home(req, res) {
    res.render('home');
  }
}

export default new SiteController();
