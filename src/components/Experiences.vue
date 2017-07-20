<template>
  <div class="experience" id="experience">
    <h2>What I have done?</h2>
    <p>Some projects I've done so far. Click to see more!</p>
  	<tab :tabtype="tabtype" :tabs="tabs"></tab>
  </div>
</template>

<script>
  import Tab from '../layouts/Tabs'

  export default {
    name: 'exp',
    components: {Tab},
    data () {
      return {
        tabtype: 'exp',
        tabs: [{tabname: 'Web', tabcontent: [
                    {thumbnail: '//s3-us-west-1.amazonaws.com/nagisaimage/VITPLA_web_thumbnail.png',
                      name: 'VITPLA',
                      detail: {
                        name: 'VITPLA',
                        intro: 'Cooperated with doctors of Children’s National Medical Center and Rutgers ECE department PhD student. This web app can provides a medical treatment recommendation from established massive dataset. I could not provide website for you because right now ourwebsite doesn\'t open to the public.',
                        src1: '//s3-us-west-1.amazonaws.com/nagisaimage/VITPLA_web.png',
                        src2: '//s3-us-west-1.amazonaws.com/nagisaimage/VITPLA_web_2.png',
                        role: 'I mocked up website architecture in details closely with team; created and troubleshooted professional, flat and single-paged web UI and provided data process visualization using Bootstrap and d3.js; developed front-end service logic flow using jQuery; successfully developed and packed a unique, clean and reusable JavaScript library (please see the screenshot above, also you are welcome to see this project at https://github.com/nagisa1993/timeline.js) based on d3.js using Webpack, providing a timeline with draggable visualization window and updated data visualization; refactored legacy code into different modules, improving loading efficiency to a great extent.',
                        learn: 'Learnt about how to pack a JavaScript library using Webpack to make codes cleaner, neater and reusable, which is a web developer\'s basic ability. The most important thing I learnt is, I developed strong teamspirit and strengthen my communication ability as well as coding capability. What\'s more, by joinging this project, I saw the power of d3.js and knew how to take control of it.',
                        time: '10/2016-05/2017',
                        keywords: ['d3.js', 'Bootstrap', 'jQuery', 'Git', 'Webpack']
                      }
                    }, 
                    {thumbnail: '//s3-us-west-1.amazonaws.com/nagisaimage/Crowdpp_web_thumbnail.png',
                      name: 'Crowd++',
                      detail: {
                        intro: 'This web app is a clean analysis tool for doctors and parents to let them know an autistic kid\'s daily routes, speaking counts and speaking percentage. Crowd++ is a series tool (including web and Android apps), aiming to provide better caring for autistic children and monitoring for parents by tracking children\'s daily routines in voice analyzation(including speak percentage & speaker count) and location collection. I cooperated with teachers from Psychology department of Rutgers University and WINLAB PhD student.',
                        href: 'http://54.196.39.156/FrontEnd/index.html',
                        src1: '//s3-us-west-1.amazonaws.com/nagisaimage/Crowdpp_web_1.png',
                        src2: '//s3-us-west-1.amazonaws.com/nagisaimage/Crowdpp_web_2.png',
                        role: 'I created and tested AngularJS & Material-Design based website hosting on AWS; I Built the website to fetch different users from database, realized dynamical date retrieving in Material\'s date-picker function, displayed selected date\'s activity data, activity map and speaker analysis on the page; wrote CRUD PHP codes for AWS service.',
                        learn: 'In my opinion, understanding how to host a website on AWS and adapting to a Linux environment without IDE is of the most important. Luckily, with my hard work and help from PhD student, I pick it up quickly and smoothly.',
                        name: 'Crowd++ Web',
                        time: '10/2016-01/2017',
                        keywords: ['AWS', 'AngularJS', 'Material', 'PHP']
                      }
                    },
                    {thumbnail: '//s3-us-west-1.amazonaws.com/nagisaimage/TrafficMonitoring_web_thumbnail.jpeg',
                      name: 'New Jersey Traffic Monitoring & Analysis System',
                      detail: {
                        intro: 'This is a course project based on MEAN stack, providing for New Jersey\'s drivers to better analyze New Jersey’s traffic pattern according to historic traffic data & weather data retrieved from local website. This web app can provide a better driving route dispite heavy traffic for drivers according a specific time based on A* algorithm; show heavy traffic hotspots with filters like date, weather and severity; let users upload the traffic around them.',
                        src1: '//s3-us-west-1.amazonaws.com/nagisaimage/TrafficMonitoring_web_1.jpeg',
                        src2: '//s3-us-west-1.amazonaws.com/nagisaimage/TrafficMonitoring_web_2.png',
                        href: 'https://github.com/nagisa1993/TrafficMonitoring',
                        role: 'I designed responsive website UI and took website from sketch to reality. I developed backend service using Node.js and Express, constructed different database schemas with the utilization of Mongoose. I developed async call handler, resolved asynchronous problem in RESTful APIs and unit tested API using Postman. I successfully developed full-stack for \'Hotspot\', \'History\' and \'Upload\' page. \'Hotspot\' page clearly displays heavy traffic spots in marks and heatmap; \'History\' page can show users\' searching histories; \'Upload\' page can let users upload traffic information around them',
                        learn: 'Leading a team is not an easy thing, our team developed following the process of Agile and using version control tool (Git). We coummunicated well between each others to find bugs, improve performance and exchange knowledge. Besides, learning popular stack like MEAN is a good experience for my future work in real industry.',
                        name: 'New Jersey Traffic Monitoring & Analysis System',
                        time: '10/2016-12/2016',
                        keywords: ['MEAN-stack', 'full-stack', 'Git', 'Agile']
                      }
                    },
                    {thumbnail: '//s3-us-west-1.amazonaws.com/nagisaimage/StockPrediction_thumbnail.png',
                      name: 'Stock Prediction System',
                      detail: {
                        intro: 'This is a simple course work webpage which displays long-term stock prediction and short-term stock prediction, utilizing Bayes curve fitting, ANN and SVM Algorithms and obtaining stock data by Yahoo!Finance API. I didn\'t have screenshots left so I put some paper prototyping here.',
                        role: 'I created the website using HTML, CSS, JavaScript and HighChart and development services for back-end.',
                        src1: '//s3-us-west-1.amazonaws.com/nagisaimage/StockPrediction.png',
                        src2: '//s3-us-west-1.amazonaws.com/nagisaimage/StockPrediction_2.png',
                        href: 'https://github.com/nagisa1993/StockPrediction',
                        learn: 'This is the first website I developed, I picked HTML, CSS and JavaScript up quickly. I got enchanted by the charm of front-end development; Since then, I quickly absorb different front-end knowledge and learnt by myself by taking online courses and coding practising.',
                        name: 'Stock Prediction System',
                        time: '01/2016-03/2016',
                        keywords: ['HTML', 'CSS', 'JavaScript']
                      }
                    }
                    ]},
            {tabname: 'Android', tabcontent: [
                    {thumbnail: '//s3-us-west-1.amazonaws.com/nagisaimage/Crowdpp_android_thumbnail.png',
                      name: 'Crowd++',
                      detail: {
                        intro: 'This is a new version of Crowd++ app called Activity Logger. These serial apps of Crowdpp are aimed at autistic children, providing better caring and monitoring for their daily life when parents and doctors are not with them. By collecting children\'s speak percentage in conversations, their locations and their activities (including their motions, call and msg on the phone), parents and doctors can in a variety of degrees know whether their children are active indeed.',
                        src1: '//s3-us-west-1.amazonaws.com/nagisaimage/Crowdpp_android_2.png',
                        src2: '//s3-us-west-1.amazonaws.com/nagisaimage/Crowdpp_android.jpg',
                        href: 'https://github.com/nagisa1993/Crowdpp2',
                        role: 'Added activity recognition by applying Google Activity Recognition API; stored activity data into Android phone storage and upload files onto AWS server according to user\'s customized uploading period and interval. Solved resuming uploading problem by combining Internet checking, rescheduled background task and maintained a unuploaded FIFO files queue when Internet is unenabled. Wrote custom time preference for Android Preference Compat. Designed user-friendly Android Material-Design UI. Composed professional Android application documentation on Github.',
                        learn: 'This is a very systematical Android app I developed so far including UI, user experiences, data collection and cloud service. I understood how to created a asynchronous task and I am able to reschedule one task in the future when its dependency like network is unable; it is important because in actual case, many situations needed to take into consideration; pre-consideration can help one avoid many unnecessary problems. Additionally, flattening UI is so attractive to me, I developed this Activity Logger\'s UI following Material Design rules, which made great effect.',
                        name: 'Crowd++ Android (Activity Logger)',
                        time: '03/2017-05/2017',
                        keywords: ['Android', 'AWS', 'Google API']
                      }
                    },
                    {thumbnail: '//s3-us-west-1.amazonaws.com/nagisaimage/rupacer_thumbnail.png',
                      name: 'RUPacer',
                      detail: {
                        intro: 'This is an Android sensor-based social pedometer. It is an innovative-user-interface application which can count daily step, record total steps in last week, connect with Facebook account, detect location, show current local weather for a walk, present achievement, display leaderboard among Facebook friends, share a screenshot of current screen to Facebook timeline and settle daily walking goal.',
                        src1: '//s3-us-west-1.amazonaws.com/nagisaimage/RUPacer.png',
                        src2: '//s3-us-west-1.amazonaws.com/nagisaimage/RUPacer_2.PNG',
                        href: 'https://github.com/nagisa1993/RUPacer',
                        role: 'This is a group course project, I designed user interface including palette choosing, menu expanding and component arragement. I implemented weather part on main page using data from forecast.io and downloading JSON information including temperature, humidity, precipitation rate, time zone and weather forecasting icon. I presented the final report to teachers and students.',
                        learn: 'I formed strong team spirits in this project as our team members always sat around and decided how to improve our app. We conducted and tested our own parts and the best part was to see the merged result -- at that time, we didn\'t use Git, a useful and important tool proving to play a great role in developing in the future for me -- so the merging process was very painful but I took it as a trial for team-developing\'s first step.',
                        name: 'RUPacer',
                        time: '12/2015-12/2015',
                        keywords: ['Android', 'Facebook API', 'Sensor']
                      }
                    },
                    {thumbnail: '//s3-us-west-1.amazonaws.com/nagisaimage/Camera_thumbnail.png',
                      name: 'Snapshot Camera',
                      detail: {
                        intro: '(Screenshots not available) A coursework app that can take photos or take a 10s-long video when user picks up the phone and take a shot when video finishes recording. Besides, the videos and photos will be stored in phone storage and there will be GPS information recorded for photos.',
                        src1: '//s3-us-west-1.amazonaws.com/nagisaimage/Camera.png',
                        role: 'Developed the whole app and implemented sensor manager and Android camera to let the app respond (take videos and photos) to users’ motion whenever users pick up their phone. Analyzed accelerator value difference between \'sudden pick up\' (including vigorouly shaking phone or suddenly picking up phone from table) and \'daily pick up\' (like reading message or answering phone).',
                        learn: 'I learnt about Android sensor\'s and camera\'s whole lifecycle and process. This makes me become more familar with Android\'s lifecycle. In addition, fragment is a very important Android concept, it is in some degree allowing me to form a modularization development sense in the future.',
                        title: 'Snapshot Camera',
                        time: '11/2015-11/2015',
                        keywords: ['Android', 'Sensor']
                      }
                    },
                    {thumbnail: '//s3-us-west-1.amazonaws.com/nagisaimage/heatmap_android_thumbnail.png',
                      name: 'Daily Route Interactive Heatmap',
                      detail: {
                        intro: 'An Android app which obtains GPS locations every 5 min to draw a color-gradient heatmap to clearly show that location data reveals one’s daily routine, habits and identity. User could check in and see real time location data to reveal how the app\'s location permissions could reveal information about user\'s daily life, utilizing Google Maps API, location service, SQLite and heatmap.',
                        src1: '//s3-us-west-1.amazonaws.com/nagisaimage/heatmap_android.png',
                        src2: '//s3-us-west-1.amazonaws.com/nagisaimage/heatmap_android_2.png',
                              role: 'Constructed Android SQLite to store different location data like checked-in place addresses and latitudes and longitudes along the way. Created realtime map with heatmap layout, check-in button and visited places\' name window. Insightful analyzed sequence and accuracy of the location fixes from GPS and network localization, comparing different results indoors and outdoors on delay and accuracy.',
                        learn: 'I find Google Map\'s heatmap a very interesting and helpful tool to display data-intensive degree. By developing this app, I knew exactly how external API works, what permissions and methods we need to add with respect to different app functions and how to utilize Google Map Android Library.',
                        title: 'Daily Route Interactive Heatmap',
                        time: '10/2015-10/2015',
                        keywords: ['Android', 'heatmap', 'Googlemap', 'Location']
                      }
                    },                    
                    {thumbnail: '//s3-us-west-1.amazonaws.com/nagisaimage/bluelamp_thumbnail.png',
                      name: 'Blue Lamp Bluetooth-connected Android Alarm',
                      detail: {
                        intro: 'This is my Bachelor\'s graduation project. It is inspired by a research published on Nature, that blue light can wake up people quickly. This app can connect to a blue light lamp (LED) via Bluetooth and let user set up an alarm; after which the lamp will light up 15 minites before the actual ring time to wake user\'s brains up before one actually is awake.',
                      src1: '//s3-us-west-1.amazonaws.com/nagisaimage/bluelamp.png',
                      src2: '//s3-us-west-1.amazonaws.com/nagisaimage/bluelamp2.png',
                      role: 'For the hardware part, I programmed for the hardware codes using C and tested blutetooth communication on PC; for the software part, I developed Bluetooth communication and alarm modules, designed a neat UI and tested communication between app and lamp.',
                      learn: 'This is my first Android app involved with both hardware programming and software programming. I realize how user experience matters in application development because before that, I never developed an app made for people, I only coded on machines or circuit boards. This experience drew my interests in developing application for people.',
                      title: 'Bluetooth-connected Android Alarm',
                      time: '01/2015-04/2015',
                      keywords: ['Android', 'Alarm manager', 'Bluetooth']
                      }
                    }
                    ]}]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './stylesheets/_experience.scss';
</style>