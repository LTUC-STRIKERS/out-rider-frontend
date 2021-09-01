import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import yazeed from '../images/yazeed-pic.png'
import duaa from '../images/duaa-pic.png'
import mansoor from '../images/mansoor-pic.png'
import ahmad from '../images/ahmad-pic.png'
import trad from '../images/trad-prof.jpg';
import Card from './Card';
import { Row } from "react-bootstrap";
// import './AboutUs.css'
let membersArray = [];
class Member {
    constructor(memberName, memberbackground, memberFacebook, memberGithub, memberlinkedIn, memberImage) {
        this.memberName = memberName;
        this.memberbackground = memberbackground;
        this.memberFacebook = memberFacebook;
        this.memberGithub = memberGithub;
        this.memberlinkedIn = memberlinkedIn;
        this.memberImage = memberImage;
    }
}
let namesArray = [
    "Yazeed Aloufee",
    "Du'a Jaradat",
     "Mansoor Kalash",
      "Ahmad Quraan",
    "Trad Almelhem"
]
let backgroundArray = [
    "Electronics Engineer",
    "Civil Engineer", 
    "Electrical Power & Machines Engineer",
     "Accountant",
      "Software engineer"]
let facebookArray = [
    "https://www.facebook.com/yaz.eed.338/",
    "https://web.facebook.com/profile.php?id=100012458509733",
    "https://m.facebook.com/mansoor.kalash.7?comment_id=Y29tbWVudDo3MTU0NzI4OTg4Mzg5MjNfNzE1NzM2OTgyMTQ1ODQ4",
    "https://www.facebook.com/A7madQour3an/",
    "https://web.facebook.com/harith.hariri.1"]
let linkedInArray = ["https://www.linkedin.com/in/yazeed-aloufee-088118128/ ",
    "https://www.linkedin.com/in/du-a-jaradat-b7474413b/",
    "https://jo.linkedin.com/in/mansoor-kalash-87b81a127",
    "https://www.linkedin.com/in/ahmad-quraan-585a47199/",
    "https://www.linkedin.com/in/trad-alhariri-1392a6130/"]
let githubArray = ["https://github.com/yazeedaloufee",
    "https://github.com/duajaradat",
    "https://github.com/duajaradat",
    "https://github.com/AHMADQURAAN97",
    "https://github.com/tradalhariri"]
let imagesArray = [yazeed, duaa, mansoor, ahmad, trad]
function membersData() {
    for (let i = 0; i < 5; i++) {
        let member = new Member(namesArray[i], backgroundArray[i], facebookArray[i], githubArray[i], linkedInArray[i], imagesArray[i])
        membersArray.push(member);
    }
}
membersData();
////////////////////////////////////////////////////
class AboutUsCards extends React.Component {
    render() {
        return (
            <Row xs={1} sm={2} md={3} lg={3} className="g-3">

           { membersArray.map(member => <Card member={member} />)}
            </Row>
        )
    }
}
export default AboutUsCards;