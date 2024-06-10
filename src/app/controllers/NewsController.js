class NewsController {
  // [GET] /news
  index(req, res) {
    res.render('news');
  }

  show(req, res) {
    const { slug } = req?.params;
    res.send(slug);
  }
}

export default new NewsController();
