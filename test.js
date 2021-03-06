  $(document).ready(function () {

    //$('.drawer-hamburger').css({"padding":"40px 1.75rem 40px"});
  
    $('.drawer').drawer({
      class: {
        nav: 'drawer-nav',
          toggle: 'drawer-toggle',
          overlay: 'drawer-overlay',
          open: 'drawer-open',
          close: 'drawer-close',
          dropdown: 'drawer-dropdown'
      },
      iscroll: {
        mouseWheel: true,
        preventDefault: false
      },
      showOverlay: true
    });
  
    var notes = JSON.parse(localStorage.getItem("resume"));
  
    if (notes != null && notes.length > 0) {
      document.getElementById("resume-heading").innerHTML = "<span class='new-resume-heading'>NOTES<span>"
      var listElement = document.createElement("ul");
      listElement.setAttribute("id", "ullist");
      document.getElementById("resume-heading").appendChild(listElement);
  
      for (var i = 0; i < notes.length; i++) {
        var liItem = document.createElement("li");
        liItem.setAttribute("class", "liClass");
        liItem.appendChild(document.createTextNode(notes[i]));
        listElement.appendChild(liItem);
      }
  
    } else {
      //  document.getElementById("resume-heading").innerHTML= " <h2 class ='bkmark'>Bookmark messages that you wish to make a note of<h2>"
    }
  
  });
  
  //Initialising the bot and the entire script of the bot
  var botui = new BotUI('hello-world');
  
  botui.message.bot({ // show first message
    delay: 200,
    content: 'Hi There 👩🏻‍💻'
  }).then(function () {
    return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'I am Pratiksha, a Data Science enthusiast currently pursuing MS at Santa Clara University 👩‍🎓'
    });
  }).then(function (index) { // will send the index of the previous message to the showBookmark function which shows a star icon against the message.
    setTimeout(showBookmark(index), 1500);
  }).then(function () {
    return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'What is your name?'
    });
  }).then(function () {
    return botui.action.text({ // will print whatever was typed in the field.
      delay: 800,
      action: {
        value: 'Harry Potter',
        placeholder: 'Your name'
      }
    });
  }).then(function (res) { // will be called when it is submitted.
    return botui.message.bot({
      delay: 500,
      content: 'Alright ' + res.value + '! Thank you for your interest.',
    });
  }).then(function () {
    return botui.message.bot({
      delay: 1200,
      content: 'I’m a techie and I love to make cool products. 🧚🏻 I’m passionate about building ML/AI products.'
    }); // will print whatever was typed in the field.
  
  }).then(function () { // will be called when it is submitted.
    return botui.message.bot({
      delay: 1000,
      type: 'embed',
      content: 'My main focus is in deep learning and I have been able to work on several great projects in NLP and Computer Vision through school and research! check it out here: https://github.com/pratikshaRaval'
    });
  
  }).then(function () {
    return botui.message.bot({
      delay: 2000,
      content: 'Also, I am a Graduate Teaching Assistant for IS and Analytics students where I help them with the concepts.'
    });
  
  }).then(function () {
  
    return botui.action.button({
      action: [{
          text: 'Okay! Got it',
          value: 'got_it'
        },
        {
          text: 'How can I reach out to you?',
          value: 'reach_out'
  
        }
      ]
    });
  
  }).then(function (res) {
    if (res.value == 'reach_out') {
      return botui.message.bot({
        delay: 1000,
        content: 'Shoot me an email at pratiksharaval7@gmail.com',
  
      }).then(function (index) {
        setTimeout(showBookmark(index), 1500);
  
      }).then(function () {
        return botui.message.bot({
          delay: 1000,
          content: 'Alternatively if you are in Bay Area, I am always down for coffee ☕',
        });
      });
    } else {
      return botui.message.bot({ // second one
        delay: 1000, // wait 1 sec.
        content: 'Great'
      }).then(function () {
        return botui.action.button({ // let user do something
          delay: 1000,
          action: [{
              text: 'Share your journey',
              value: 'journey'
  
            },
            {
              text: 'Where have you worked',
              value: 'work_ex'
  
            }
          ]
        });
      }).then(function (res) {
        if (res.value == 'work_ex') {
          return botui.message.bot({
            delay: 1000,
            content: 'Prior to Santa Clara University, I was working as a Software Engineer in Test at Allscripts, a leading healthcare IT in USA.'
          }).then(function (index) {
            setTimeout(showBookmark(index), 1500);
          }).then(function () {
            return botui.message.bot({
              delay: 1000,
              content: 'As part of the Financial Management team, I was responsible for financial experience of the patients and insurance companies on the Allscripts platform.'
            });
          }).then(function (index) {
            setTimeout(showBookmark(index), 1500);
          }).then(function () {
            return botui.message.bot({
              delay: 1000,
              content: 'Not only I resolved software problems as they relate to the business as a whole, but I was also responsible for communicating those in terms that those outside the technology field can readily comprehend'
            });
          }).then(function (index) {
            setTimeout(showBookmark(index), 1500);
          }).then(function () {
            return botui.action.button({ // let user do something
              delay: 1000,
              action: [{
                  text: 'Tell me more',
                  value: 'more'
  
                },
                {
                  text: 'How can I reach out to you?',
                  value: 'reach_out'
  
                }
              ]
            });
          }).then(function (res) {
            if (res.value == 'more') {
              return botui.message.bot({
                delay: 1000,
                content: 'I designed and developed data dashboards for visualizing KPIs, track and analyze health of the business. This has made me aware of the intricacies involved in developing products and services which are shippable to the commercial market',
              }).then(function (index) {
                setTimeout(showBookmark(index), 1500);
  
              }).then(function () {
                return botui.message.bot({
                  delay: 1000,
                  content: 'What else do you want to talk about? Select it from the menu on the left',
                });
              });
            } else {
              return botui.message.bot({
                delay: 1000,
                content: 'Shoot me a mail at pratiksharaval7@gmail.com',
              }).then(function (index) {
                setTimeout(showBookmark(index), 1500);
              }).then(function () {
                return botui.message.bot({
                  delay: 1000,
                  content: 'Alternatively if you are in Bay Area, I am always down for coffee ☕',
                });
              });
  
            }
          });
        } else {
          return botui.message.bot({
            // show first message
            delay: 1000,
            content: 'I was born and brought up in Gujarat, a state in western India.'
          }).then(function () {
            return botui.message.bot({
              // show first message
              delay: 1000,
              content: 'Having changed different schools while growing up, I can easily adapt to newer environments and attempt to understand and embrace change positively',
            });
          }).then(function (index) {
            setTimeout(showBookmark(index), 1500);
          }).then(function () {
            return botui.message.bot({
              // show first message
              delay: 1000,
              content: 'I pursued Computer Engineering in my undergrad which formally introduced me to the world that does the magic behind and beyond the screens 🖥️',
            });
          }).then(function (index) {
            setTimeout(showBookmark(index), 1500);
          }).then(function () {
            return botui.message.bot({
              // show first message
              delay: 1000,
              content: 'Questions like how would people make sense of the growing technology would fascinate me. This brought me to SCU to study Information Systems.',
            });
          }).then(function (index) {
            setTimeout(showBookmark(index), 1500);
          }).then(function () {
            return botui.action.button({ // let user do something
              delay: 1000,
              action: [{
                  text: 'Where have you worked',
                  value: 'work_ex'
  
                },
                {
                  text: 'What skills ya got',
                  value: 'skills'
  
                }
              ]
            });
          }).then(function (res) {
            if(res == 'skills') {
              console.log(res.value);
              return botui.message.bot({
                // show first message
                delay: 1000,
                content: 'I have hands-on experience with both designing user interfaces and developing an application',
              }).then(function (index) {
                setTimeout(showBookmark(index), 1500);
              }).then(function () {
                return botui.message.bot({
                  // show first message
                  delay: 1000,
                  content: 'I have keen interests in playing around the TensorFlow and Keras libraries. I train models to predict future and use data to help make decisions',
                });
              }).then(function (index) {
                setTimeout(showBookmark(index), 1500);
              }).then(function () {
                return botui.message.bot({
                  // show first message
                  delay: 1000,
                  content: 'I dont stop there but use Visualization tools to to create impactful data report.',
                });
              }).then(function (index) {
                setTimeout(showBookmark(index), 1500);
              }).then(function () {
                return botui.message.bot({
                  // show first message
                  delay: 1000,
                  content: 'Deploy the work on cloud using AWS, Azure and Docker for image containerization',
                });
              }).then(function (index) {
                setTimeout(showBookmark(index), 1500);
              });
            } else {
              return botui.message.bot({
                  delay: 1000,
                  content: 'Prior to SCU, I was working as a Software Engineer at Allscripts, a leading healthcare IT in USA.',
                }).then(function (index) {
                  setTimeout(showBookmark(index), 1500);
                }).then(function () {
                  return botui.message.bot({
                    delay: 1000,
                    content: 'As part of the Financial Management team, I was responsible for financial experience of the patients and insurance companies on the Allscripts platform.',
                  });
                }).then(function (index) {
                  setTimeout(showBookmark(index), 1500);
                })
                .then(function () {
                  return botui.message.bot({
                    delay: 1000,
                    content: 'Not only I resolved software problems as they relate to the business as a whole, but I was also responsible for communicating those in terms that those outside the technology field can readily comprehend',
                  });
                })
                .then(function (index) {
                  setTimeout(showBookmark(index), 1500);
                }).then(function () {
                  return botui.action.button({ // let user do something
                    delay: 1000,
                    action: [{
                        text: 'Tell me more',
                        value: 'more'
  
                      },
                      {
                        text: 'How can I reach out to you?',
                        value: 'reach_out'
  
                      }
                    ]
                  });
                }).then(function (res) {
                  if (res.value == 'more') {
                    return botui.message.bot({
                      delay: 1000,
                      content: 'I designed and developed data dashboards for visualizing KPIs, track and analyze health of the business. This has made me aware of the intricacies involved in developing products and services which are shippable to the commercial market',
                    }).then(function (index) {
                      setTimeout(showBookmark(index), 1500);
  
                    }).then(function () {
                      return botui.message.bot({
                        delay: 1000,
                        content: 'What else do you want to talk about? Select it from the menu on the left',
                      });
                    });
                  } else {
                    return botui.message.bot({
                      delay: 1000,
                      content: 'Shoot me a mail at pratiksharaval7@gmail.com',
                    }).then(function (index) {
                      setTimeout(showBookmark(index), 1500);
                    }).then(function () {
                      return botui.message.bot({
                        delay: 1000,
                        content: 'Alternatively if you are in Bay Area, I am always down for coffee ☕',
                      });
                    });
  
                  }
                });
            }
          });
        }
      });
    }
  
  });
  // Click functions for the links in the drawer
  document.getElementById("journey").onclick = function () {
    journey();
  }
  
  document.getElementById("philosophy").onclick = function () {
    philosophy();
  }
  
  document.getElementById("experience").onclick = function () {
    experience();
  }
  
  document.getElementById("interest").onclick = function () {
    interest();
  }
  
  document.getElementById("skills").onclick = function () {
    skills();
  }
  
  document.getElementById("research").onclick = function () {
    research();
  }
  
  document.getElementById("exploration").onclick = function () {
    exploration();
  }
  
  document.getElementById("achievements").onclick = function () {
    achievements();
  }
  
  
  document.getElementById("book").onclick = function () {
    book();
  }
  
  document.getElementById("facts").onclick = function () {
    facts();
  }
  
  document.getElementById("touch").onclick = function () {
    touch();
  }
  
  var skills = function () {
    botui.message.bot({
      human: true,
      delay: 1000, // wait 1 sec.
      content: 'What skills ya got?'
    }).then(function () {
      return botui.message.bot({
        // show first message
        delay: 1000,
        content: 'I have hands-on experience with both designing user interfaces and developing an application.'
      });
    }).then(function (index) {
      setTimeout(showBookmark(index), 1500);
    }).then(function () {
      return botui.message.bot({
        // show first message
        delay: 1000,
        content: 'I have keen interests in playing around the TensorFlow and Keras libraries. I train models to predict future and use data to help make decisions',
      });
    }).then(function (index) {
      setTimeout(showBookmark(index), 1500);
    }).then(function () {
      return botui.message.bot({
        // show first message
        delay: 1000,
        content: 'I dont stop there but use Visualization tools to to create impactful data report.'
      });
    }).then(function (index) {
      setTimeout(showBookmark(index), 1500);
    }).then(function () {
      return botui.message.bot({
        // show first message
        delay: 1000,
        content: 'Deploy the work on cloud using AWS, Azure and Docker for image containerization'
      });
    }).then(function (index) {
      setTimeout(showBookmark(index), 1500);
    });
  
  }
  
  var philosophy = function () {
    botui.message.bot({
      human: true,
      delay: 1000, // wait 1 sec.
      content: 'Do you have a work philosophy'
    }).then(function () {
      return botui.message.bot({
        // show first message
        delay: 1000,
        content: 'I believe that communication is everything. Science and engineering are team sports. Any successful open-source project will have a strong emphasis on communication, collaboration, empathy, and respect - not just engineering'
      });
    }).then(function () {
      return botui.message.bot({
        // show first message
        delay: 1000,
        content: 'Also, I believe in nurturing and building communities. A group of passionate people who care about each other’s success is everything'
      });
    });
  
  }
  
  
  var journey = function () {
  
    return botui.message.bot({
      // show first message
      human: true,
      delay: 1000,
      content: 'Tell me about your journey'
    }).then(function () {
      return botui.message.bot({
        // show first message
        delay: 1000,
        content: 'I was born and brought up in Guajrat, a state in Western India.'
      });
    }).then(function () {
      return botui.message.bot({
        delay: 1000,
        content: 'Having changed different schools while growing up, I can easily adapt to newer environments and attempt to understand and embrace change positively'
      });
    }).then(function (index) {
      setTimeout(showBookmark(index), 1500);
    }).then(function () {
      return botui.message.bot({
        delay: 1000,
        content: 'I pursued Computer Engineering in my undergrad which formally introduced me to the world that does the magic behind and beyond the screens 🖥️'
      });
    }).then(function (index) {
      setTimeout(showBookmark(index), 1500);
    });
  
  }
  
  
  var experience = function () {
    return botui.message.bot({
      human: true,
      delay: 1000,
      content: 'Tell me about your work experience'
    }).then(function () {
      return botui.message.bot({
        delay: 1000,
        content: 'Prior to SCU, I was working as a Software Engineer at Allscripts, a leading healthcare IT in USA.'
      });
    }).then(function (index) {
      setTimeout(showBookmark(index), 1500);
    }).then(function () {
      return botui.message.bot({
        delay: 1000,
        content: 'As part of the Financial Management team, I was responsible for financial experience of the patients and insurance companies on the Allscripts platform.'
      });
    });
  
  }
  
  
  var interest = function () {
  
    return botui.message.bot({
      human: true,
      delay: 1000, // wait 1 sec.
      content: 'What are your interest?'
    }).then(function () {
      return botui.message.bot({
        // show first message
        delay: 1000,
        content: 'I am interested in designing high-performance machine learning methods that make sense to humans'
      });
    }).then(function () {
      return botui.message.bot({
        delay: 1000,
        content: 'I am particularly keen on developing a funtion that has the potential to transform human-machine interaction'
  
      })
    }).then(function (index) {
      setTimeout(showBookmark(index), 1500);
    }).then(function () {
      return botui.action.button({ // let user do something
        delay: 1000,
        action: [{
            text: 'Tell me more!',
            value: 'tell_me_more'
          },
          {
            text: 'Get in touch',
            value: 'reach_out'
  
          }
        ]
      });
  
    }).then(function (res) {
      if (res.value == 'reach_out') {
  
  
        return botui.message.bot({
          delay: 1000, // wait 1 sec.
          content: 'Shoot me a mail at pratiksharaval7@gmail.com or connect to me https://www.linkedin.com/in/pratiksha-raval/',
        }).then(function (index) {
          // setTimeout(showBookmark(index),1500);   
        }).then(function () {
          return botui.message.bot({ // let user do something
            delay: 1000,
            content: 'Alternatively if you are in Bay Area, I am always down for coffee ☕',
          });
        });
      } else {
        botui.message.bot({ // second one
          delay: 1000, // wait 1 sec.
          content: 'Check out my work [here](https://github.com/pratikshaRaval)'
        })
      }
  
    });
  }
  var research = function () {
  
    return botui.message.bot({
      human: true,
      delay: 1000, // wait 1 sec.
      content: 'Tell me about your past research work and Projects'
    }).then(function () {
      return botui.message.bot({
        // show first message
        delay: 200,
        content: 'One of my project uses NLP for auto text generation. It uses Keras and Tensorflow for word embeddings where the model is trained to learn the likelihood of occurrence of a word based on the previous sequence of words',
      });
    }).then(function () {
      return botui.message.bot({ // second one
        delay: 1000, // wait 1 sec.
        content: 'While another one focuses on connecting with professional photographers and letting them showcase their work through making portfolios that are perfect for inspiration and creative influence.',
  
      })
    }).then(function () {
      return botui.message.bot({ // second one
        delay: 1000, // wait 1 sec.
        content: 'Another one includes a Web App for personalized restaurant choices and a spinner feature for making random dining decisions based on nearby places, cuisine, rating, and cost',
  
      })
    }).then(function () {
  
      messageCounter();
      return botui.action.button({ // let user do something
        delay: 1000,
        action: [{
            text: 'Good',
            value: 'good'
          },
          {
            text: 'Really Good',
            value: 'really_good'
          }
        ]
      });
    });
  }
  
  var exploration = function () {
  
    return botui.message.bot({
      human: true,
      delay: 1000, // wait 1 sec.
      content: 'What are you upto in college'
    }).then(function () {
      return botui.message.bot({ // second one
        delay: 1000, // wait 1 sec.
        content: 'Keeping with my interest with emerging technologies, I am currently working on two projects. The first is a project is to create ETL dashboard for Caltrain riders where I extracted, interpreted and analyzed real-time data from Caltrain API to identify Key metrics and moved data to the Landing Bucket on AWS S3.',
      });
    }).then(function () {
      return botui.message.bot({ // second one
        delay: 1000, // wait 1 sec.
        content: 'My second project is a little too explorative and I have worn a hat of an artist. I will be implementing Neural Style Transfer to make the user-input images resemble a painting from the predicted lesser-known artist.',
      });
    });
  }
  var achievements = function () {
  
    return botui.message.bot({
      human: true,
      delay: 1000, // wait 1 sec.
      content: 'Tell me about your achievements'
    }).then(function () {
      return botui.message.bot({ // second one
        delay: 1000, // wait 1 sec.
        content: 'Our team won the first prize in 2016, for Home Automation System that was built using open source technologies aiming to make it affordable for everyone',
      });
    }).then(function () {
      return botui.message.bot({ // second one
        delay: 1000, // wait 1 sec.
        content: 'Achieved Allscripts "Employer of the Month" Award for being Production-ready within 1 month during the internship',
      });
    });
  }
  
  var book = function () {
  
    return botui.message.bot({
      human: true,
      delay: 1000, // wait 1 sec.
      content: 'What are you reading these days?'
    }).then(function () {
      return botui.message.bot({ // second one
        delay: 1000, // wait 1 sec.
        content: 'I have just started reading Matthew Portnoys "Virtualization Essentials" 📖. To advance my knowledge on cloud computing ☁️',
      });
    }).then(function () {
      return botui.message.bot({ // second one
        delay: 1000, // wait 1 sec.
        content: 'But hey, Harry Potter Series and To Kill a Mockingbird remain my all-time favorites 👻',
      });
    });
  }
  
  var facts = function () {
  
    return botui.message.bot({
      human: true,
      delay: 1000, // wait 1 sec.
      content: 'Have fun facts to share? '
    }).then(function () {
      return botui.message.bot({ // second one
        delay: 1000, // wait 1 sec.
        content: 'I am a trained Badminton Player and have played Nationals 🏸',
      });
    });
  }
  
  var touch = function () {
  
    botui.message.bot({
      human: true, // second one
      delay: 1000, // wait 1 sec.
      content: 'How can I reach out to you?',
    }).then(function () {
      return botui.message.bot({
        delay: 1000, // wait 1 sec.
        content: 'Shoot me a mail at pratiksharaval7@gmail.com or connect to me https://www.linkedin.com/in/pratiksha-raval/',
      })
    }).then(function (index) {
      // setTimeout(showBookmark(index),1500);   
    }).then(function () {
      return botui.message.bot({ // let user do something
        delay: 1000,
        content: 'Alternatively if you are in Bay Area, I am always down for coffee ☕',
      });
    });
  }
  
  // Function to show checkbox  
  var checkboxNumber = [];
  var showBookmark = function (msgno) {
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    var span = document.createElement('span');
    span.className = "check";
  
    var value = "checkbox" + msgno;
    checkbox.id = "checkbox" + msgno;
    var label = document.createElement('label')
    document.getElementsByClassName("botui-message")[msgno].appendChild(label);
    label.appendChild(span);
    label.appendChild(checkbox);
  
    if (localStorage.getItem("checkbox" + msgno) !== null && localStorage.getItem("checkbox" + msgno) == "true") {
      console.log("not null");
      $("#checkbox" + msgno).prev('span').addClass('checked');
      $("#checkbox" + msgno).prop('checked', true);
    }
  
    $("#checkbox" + msgno).change(function () {
      if ($("#checkbox" + msgno).is(':checked')) {
        $(this).prev('span').addClass('checked');
        save($(this).parent().prev().find("span").html(), msgno);
      } else {
        $(this).prev('span').toggleClass('checked');
        deleteListItem($(this).parent().prev().find("span").html(), msgno);
      }
    });
  }
  
  
  //function to save a message when bookmark is clicked
  var save = function (text, msgno) {
    localStorage.setItem("notes", text);
    var notes = localStorage.getItem("notes");
    var newNote = [];
    if (JSON.parse(localStorage.getItem("resume")) == null) {
      newNote.push(notes);
      localStorage.setItem("resume", JSON.stringify(newNote));
    } else {
      var saved = JSON.parse(localStorage.getItem("resume"));
      saved.push(notes);
      localStorage.setItem("resume", JSON.stringify(saved));
  
    }
    var notes = JSON.parse(localStorage.getItem("resume"));
    if (notes != null) {
      document.getElementById("resume-heading").innerHTML = "<span class='new-resume-heading'>NOTES<span>"
      var listElement = document.createElement("ul");
      //listElement.id= "ullist";
      listElement.setAttribute("id", "ullist");
      document.getElementById("resume-heading").appendChild(listElement);
  
      for (var i = 0; i < notes.length; i++) {
        var liItem = document.createElement("li");
        //liItem.className="liClass";
        liItem.setAttribute("class", "liClass");
        liItem.appendChild(document.createTextNode(notes[i]));
        listElement.appendChild(liItem);
      }
    }
    localStorage.setItem("checkbox" + msgno, "true");
  }
  //Function to delete an item when bookmark is deselected
  var deleteListItem = function (text, msgno) {
    localStorage.removeItem("checkbox" + msgno);
    var notes = JSON.parse(localStorage.getItem("resume"));
    for (var i = 0; i < notes.length; i++) {
      if (text == notes[i]) {
        notes.splice(i, 1);
        localStorage.setItem("resume", JSON.stringify(notes));
        document.getElementsByClassName("liClass")[i].remove();
        if (notes.length == 0) {
          document.getElementById("resume-heading").innerHTML = " <h2 class ='bkmark'>Bookmark messages that you wish to make a note of<h2>"
  
  
        }
        break;
      }
  
  
    }
  
  }
