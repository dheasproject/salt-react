import React from "react";
import "./App.css";

class App extends React.Component {
     constructor(props) {
      super(props);
 
      this.state = {
          items: [],
          items_mini: [],
          items_mini_more: [],
          items_2: [],
          items_mini_2: [],
          items_mini_more_2: [],
          items_3: [],
          items_mini_3: [],
          items_mini_more_3: [],
          activity: [],
          channel: [],
          channel_2: [],
          DataisLoaded: false
      };
  }

  componentDidMount(){
    Promise.all([
        fetch('https://picsum.photos/v2/list?page=1&limit=1'),
        fetch('https://picsum.photos/v2/list?page=2&limit=2'),
        fetch('https://picsum.photos/v2/list?page=3&limit=2'),
        fetch('https://picsum.photos/v2/list?page=7&limit=1'),
        fetch('https://picsum.photos/v2/list?page=5&limit=2'),
        fetch('https://picsum.photos/v2/list?page=6&limit=2'),
        fetch('https://picsum.photos/v2/list?page=12&limit=1'),
        fetch('https://picsum.photos/v2/list?page=9&limit=2'),
        fetch('https://picsum.photos/v2/list?page=10&limit=2'),
        fetch('https://picsum.photos/v2/list?page=13&limit=6'),
        fetch('https://picsum.photos/v2/list?page=14&limit=5'),
        fetch('https://picsum.photos/v2/list?page=15&limit=5')
    ])
    .then(([res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11, res12]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json(), res7.json(), res8.json(), res9.json(), res10.json(), res11.json(), res12.json()]))
    .then(([data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12]) => this.setState({
        items: data1, 
        items_mini: data2,
        items_mini_more: data3,
        items_2: data4, 
        items_mini_2: data5,
        items_mini_more_2: data6,
        items_3: data7, 
        items_mini_3: data8,
        items_mini_more_3: data9,
        activity: data10,
        channel: data11,
        channel_2: data12,
        DataisLoaded: true
    }));
}

  render() {
    const { DataisLoaded, items, items_mini, items_mini_more, items_2, items_mini_2, items_mini_more_2, items_3, items_mini_3, items_mini_more_3, activity, channel, channel_2} = this.state;
    if (!DataisLoaded) return <div>
        <h1> Pleses wait some time.... </h1> </div> ;

  return (
    <div className="App">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="stylesheet" type="text/css" href=".App.css" />

        <title>React JS</title>
      </head>
      <body>
      <div class="container">
            <div class="pt-20">
                <div class="row align-items-center">
                    <div class="col-sm-3">
                        <h2 class="text"><strong>Social</strong>Network</h2>
                    </div>
                    <div class="col-sm-5">
                        <div class="input-group">
                            <input type="text" class="form-control input-salt" placeholder="Find ..." aria-label="Find" aria-describedby="basic-addon1" />
                            <span class="input-group-text input-salt" id="basic-addon1"><i class="fa-solid fa-magnifying-glass color-salt"></i></span>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <button class="btn btn-salt" type="submit"><i class="fa-solid fa-arrow-up"></i> Upload</button>
                    </div>
                    <div class="col-sm-2">
                        <div class="row">
                            <div class="col-sm-3">
                                <button class="btn btn-salt" type="submit"><i class="fa-solid fa-user"></i></button>
                            </div>
                            <div class="col-sm-9 user-text">
                                <h6 class="text m-0"><strong>Waseem</strong> <span class="badge btn-salt bagde-user">23</span></h6>

                                <small class="text m-0">Asrshad</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-top">
                    <li class="breadcrumb-item">Videos</li>
                    <li class="breadcrumb-item">People</li>
                    <li class="breadcrumb-item">Documents</li>
                    <li class="breadcrumb-item">Events</li>
                    <li class="breadcrumb-item">Communities</li>
                    <li class="breadcrumb-item">Favorites</li>
                    <li class="breadcrumb-item" aria-current="page">Channels</li>
                </ol>
            </nav>
            <hr />

            <div class="row">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="row align-items-center">
                                <div class="col-sm-4">
                                    <h3>Videos</h3>
                                </div>

                                <div class="col-sm-4 text-align-right">
                                    <small class="">Browse all videos</small>
                                </div>
                                <div class="col-sm-4"></div>
                            </div>

                            <div class="row align-items-center">
                                <div class="col-sm-8">
                                    <div class="row">
                                    {items.map((item) => ( 
                                        <div class="col-sm-12 pb-10">
                                            <div class="card bg-dark text-white">
                                                <img src={ item.download_url } class="card-img" />
                                                <div class="card-img-overlay">
                                                    <h5 class="card-title">{ item.author }</h5>

                                                    <div class="row">
                                                        <div class="col-sm-4">
                                                            <p class="card-text">{ item.author }</p>
                                                        </div>
                                                        <div class="col-sm-8 text-align-right">
                                                            <p class="card-text"><small>{ item.width } viewers</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        ))}

                                        {items_mini.map((item) => ( 
                                        <div class="col-sm-6 pr-0">
                                            <div class="card bg-dark text-white">
                                                <img src={ item.download_url } class="card-img-sm" alt="img" />
                                                <div class="card-img-overlay-sm">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <p class="card-text">{ item.author }</p>
                                                        </div>
                                                        <div class="col-sm-6 text-align-right">
                                                            <p class="card-text"><small>{ item.width } viewers</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                </div>

                                <div class="col-sm-4">
                                {items_mini_more.map((item) => ( 
                                    <div class="col p-10">
                                        <div class="card bg-dark text-white">
                                            <img src={ item.download_url } class="card-img-sm" alt="img" />
                                            <div class="card-img-overlay-sm">
                                                <div class="row">
                                                    <div class="col-sm-7">
                                                        <p class="card-text">{ item.author }</p>
                                                    </div>
                                                    <div class="col-sm-5 text-align-right">
                                                        <p class="card-text"><small>{ item.width } viewers</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                     ))}
                                    <div class="col pb-10">
                                        <div class="card text-white img-bg-none">
                                            <div class="card-img-overlay-bg">
                                                <div class="row text-right align-items-center">
                                                    <div class="col-sm-3 p-0">
                                                        <div><i class="fa-solid fa-arrow-up rounded-circle border p-15"></i></div>
                                                    </div>
                                                    <div class="col-sm-9 text-bg">
                                                        <p class="m-1">Upload</p>
                                                        <p class="m-1">Your Own Video</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="row align-items-center">
                                <div class="col-sm-4">
                                    <h3>Activity</h3>
                                </div>
                                <div class="col-sm-8 text-align-right">
                                    <small>View Timeline / Filter Activities</small>
                                </div>
                            </div>
                            <hr size="5" />

                            <div class="row p-3">
                            {activity.map((item) => ( 
                                <div class="row p-2">
                                    <div class="col-sm-4">
                                        <img src={ item.download_url } class="img-activity" alt="img" />
                                    </div>
                                    <div class="col-sm-8 pt-10">
                                        <div class="activity">
                                            <div><strong>{ item.author }</strong> Commented</div>
                                            <div>Well, I'm liking it how captures ...</div>
                                            <div><i class="fa-solid fa-video"></i> 2 second ago</div>
                                        </div>
                                    </div>
                                </div>
                                ))}

                                <hr />
                            </div>
                        </div>
                    </div>

                    <div class="row pt-10">
                        <div class="col-sm-8">
                            <div class="row align-items-center">
                                <div class="col-sm-4">
                                    <h3>People</h3>
                                </div>

                                <div class="col-sm-4 text-align-right">
                                    <small class="">View all</small>
                                </div>
                                <div class="col-sm-4"></div>
                            </div>

                            <div class="row align-items-center">
                                <div class="col-sm-8">
                                    <div class="row">
                                    {items_2.map((item) => ( 
                                        <div class="col-sm-12 pb-10">
                                            <div class="card bg-dark text-white">
                                                <img src={ item.download_url } class="card-img" />
                                                <div class="card-img-overlay">
                                                    <h5 class="card-title">{ item.author }</h5>

                                                    <div class="row">
                                                        <div class="col-sm-4">
                                                            <p class="card-text">{ item.author }</p>
                                                        </div>
                                                        <div class="col-sm-8 text-align-right">
                                                            <p class="card-text"><small>{ item.width } viewers</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        ))}
                                        {items_mini_2.map((item) => ( 
                                        <div class="col-sm-6 pr-0">
                                            <div class="card bg-dark text-white">
                                                <img src={ item.download_url } class="card-img-sm" alt="img" />
                                                <div class="card-img-overlay-sm">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <p class="card-text">{ item.author }</p>
                                                        </div>
                                                        <div class="col-sm-6 text-align-right">
                                                            <p class="card-text"><small>{ item.width } viewers</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                </div>

                                <div class="col-sm-4">
                                {items_mini_more_2.map((item) => ( 
                                    <div class="col p-10">
                                        <div class="card bg-dark text-white">
                                            <img src={ item.download_url } class="card-img-sm" alt="img" />
                                            <div class="card-img-overlay-sm">
                                                <div class="row">
                                                    <div class="col-sm-7">
                                                        <p class="card-text">{ item.author }</p>
                                                    </div>
                                                    <div class="col-sm-5 text-align-right">
                                                            <p class="card-text"><small>{ item.width } viewers</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                    <div class="col pb-10">
                                        <div class="card text-white img-bg-none">
                                            <div class="card-img-overlay-bg">

                                                <div class="row text-right align-items-center">
                                                    <div class="col-sm-3 p-0">
                                                        <div><i class="fa-solid fa-bullseye border p-15 rounded-circle"></i></div>
                                                    </div>
                                                    <div class="col-sm-9 text-bg">
                                                        <p class="m-1">Show</p>
                                                        <p class="m-1">Your Work</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row pt-10">
                                    <div class="col-sm-12">
                                        <div class="row align-items-center">
                                            <div class="col-sm-4">
                                                <h3>Documents</h3>
                                            </div>

                                            <div class="col-sm-4 text-align-right">
                                                <small class="">View all</small>
                                            </div>
                                            <div class="col-sm-4"></div>
                                        </div>

                                        <div class="row align-items-center"></div>
                                    </div>
                                    <div class="col-sm-4"></div>
                                </div>

                                <div class="row pt-10">
                                    <div class="col-sm-12">
                                        <div class="row align-items-center">
                                            <div class="col-sm-8">
                                            {items_3.map((item) => ( 
                                        <div class="col-sm-12 pb-10">
                                            <div class="card bg-dark text-white">
                                                <img src={ item.download_url } class="card-img" />
                                                <div class="card-img-overlay">
                                                    <h5 class="card-title">{ item.author }</h5>

                                                    <div class="row">
                                                        <div class="col-sm-4">
                                                            <p class="card-text">{ item.author }</p>
                                                        </div>
                                                        <div class="col-sm-8 text-align-right">
                                                            <p class="card-text"><small>{ item.width } viewers</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        ))}
                                                <div class="row">
                                                {items_mini_3.map((item) => ( 
                                                    <div class="col-sm-6 pr-0">
                                                        <div class="card bg-dark text-white">
                                                            <img src={ item.download_url } class="card-img-sm" alt="img" />
                                                            <div class="card-img-overlay-doc">
                                                                <p class="card-text m-0">{ item.author }</p>

                                                                <p class="card-text m-0"><small>{ item.width } viewers</small></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div class="col-sm-4">
                                            {items_mini_more_3.map((item) => ( 
                                                <div class="col p-10">
                                                    <div class="card bg-dark text-white">
                                                        <img src={ item.download_url } class="card-img-sm" alt="img" />
                                                        <div class="card-img-overlay-doc">
                                                            <p class="card-text m-0">{ item.author }</p>

                                                            <p class="card-text m-0"><small>{ item.width } viewers</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                 ))}
                                                <div class="col pb-10">
                                                    <div class="card text-white img-bg-none">
                                                        <div class="card-img-overlay-bg">

                                                            <div class="row text-right align-items-center">
                                                                <div class="col-sm-3 p-0">
                                                                    <div><i class="fa-solid fa-plus rounded-circle border p-15"></i></div>
                                                                </div>
                                                                <div class="col-sm-9 text-bg">
                                                                    <p class="m-1">Share</p>
                                                                    <p class="m-1">Your Document</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-4"></div>
                                        </div>

                                        <div class="row align-items-center"></div>
                                    </div>
                                    <div class="col-sm-4"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="row align-items-center">
                                <div class="col-sm-4">
                                    <h3>Channel</h3>
                                </div>
                                <div class="col-sm-8 text-align-right">
                                    <small>Browse all channel</small>
                                </div>
                            </div>
                            <hr size="5" />

                            <div class="row align-items-center">
                            
                                <div class="row">
                                {channel.map((item) => ( 
                                    <div class="col-sm-6 pb-10 channel">
                                        <div class="card bg-dark text-white" id="ch">
                                            <img src={ item.download_url } class="img-channel" alt="img" />
                                            <div class="card-img-overlay-channel">
                                                <h5 class="card-title fs11">{ item.author }</h5>
                                            </div>
                                            <span class="position-absolute bages-salt-channel">
                                                <i class="fa-solid fa-plus f20"></i>
                                                <span class="visually-hidden">unread messages</span>
                                            </span>
                                        </div>
                                    </div>
                                    ))}
                                    {channel_2.map((item) => ( 
                                    <div class="col-sm-6 pb-10 channel">
                                        <div class="card bg-dark text-white" id="ch">
                                            <img src={ item.download_url } class="img-channel" alt="img" />
                                            <div class="card-img-overlay-channel">
                                                <h5 class="card-title fs11">{ item.author }</h5>
                                            </div>
                                            <span class="position-absolute bages-salt-channel">
                                                <i class="fa-solid fa-plus f20"></i>
                                                <span class="visually-hidden">unread messages</span>
                                            </span>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                                
                            </div>
                            <hr />
                        </div>

                        <div class="col-sm-6"></div>
                    </div>
                </div>
            </div>

            <hr size="5" />

            <footer>
                <div class="social pb-10 text-sm">
                    <button class="btn btn-sm btn-salt m-1" type="submit"><i class="fa-brands fa-twitter"></i></button>
                    <button class="btn btn-sm btn-salt m-1" type="submit"><i class="fa-brands fa-linkedin-in"></i></button>
                    <button class="btn btn-sm btn-salt m-1" type="submit"><i class="fa-brands fa-facebook-f"></i></button>
                </div>

                <div class="breadcrumb-footer pt-10 text-sm">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">About</li>
                            <li class="breadcrumb-item">For Business</li>
                            <li class="breadcrumb-item">Suggestion</li>
                            <li class="breadcrumb-item">Help & FAQs</li>
                            <li class="breadcrumb-item">Contact</li>
                            <li class="breadcrumb-item" aria-current="page">Pricing</li>
                        </ol>
                    </nav>
                </div>

                <div class="copyright text-sm">
                    © Copyright 2013 companyname inc.
                </div>

                <div class="breadcrumb-footer text-sm">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">Privacy</li>
                            <li class="breadcrumb-item" aria-current="page">Term</li>
                        </ol>
                    </nav>
                </div>
            </footer>
        </div>
      </body>
    </div>
  );
}
}

export default App;
