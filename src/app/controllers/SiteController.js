class SiteController {
  async home(req, res) {
    res.render('home');
  }
}

export default new SiteController();
