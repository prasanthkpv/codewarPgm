function filter_list(l) {
    let filteredArray = l.filter(element => (typeof(element) != 'string'))
    console.log(filteredArray);
  }

  filter_list([1,2,'aasf','1','123',123])