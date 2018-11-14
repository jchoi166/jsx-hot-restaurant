const React = require ('react')

const Index = () =>
 
<html lang='en'>
<head>
  <meta charSet='UTF-8' />
  <title>Tables Page</title>
  <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' />
  <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
</head>
<body>
  <div className='container'>
    <div className='jumbotron'>
      <h1 className='text-center'><span className='fa fa-fire' /> Hot Restaurant</h1>
      <hr />
      <h2 className='text-center'>We only have 5 tables! Book your seat before they all are gone!</h2>
      <br />
      <div className='text-center'>
        <a href='/reservations'><button className='btn btn-lg btn-primary'><span className='fa fa-list-alt' /> View Reservations</button></a>
        <a href='/reserve'><button className='btn btn-lg btn-danger'><span className='fa fa-credit-card' /> Make Reservation</button></a>
      </div>
    </div>
  </div>

</body>
</html>

module.exports = Index
