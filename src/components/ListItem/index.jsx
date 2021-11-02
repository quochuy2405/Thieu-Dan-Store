import React from 'react';
import ItemPro from './../Item_pro/index';
import "./styles.scss";
const List=[
    {
        link_img:"https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/248499309_630544551447205_6849034023088320644_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TXATSjVNtZEAX9ZBaI9&_nc_ht=scontent.fsgn5-10.fna&oh=54df008eb2e29e480c25d69ba04019a0&oe=61A725D9",
        title:"Võ phục Quyền MOOTO ",
        description:`Chất vải : 3 sọc`,
        price:"420.000"
    },
    {
        link_img:"https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/248499309_630544551447205_6849034023088320644_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TXATSjVNtZEAX9ZBaI9&_nc_ht=scontent.fsgn5-10.fna&oh=54df008eb2e29e480c25d69ba04019a0&oe=61A725D9",
        title:"Võ phục Quyền MOOTO ",
        description:`Chất vải : 3 sọc`,
        price:"420.000"
    },
    {
        link_img:"https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/248499309_630544551447205_6849034023088320644_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TXATSjVNtZEAX9ZBaI9&_nc_ht=scontent.fsgn5-10.fna&oh=54df008eb2e29e480c25d69ba04019a0&oe=61A725D9",
        title:"Võ phục Quyền MOOTO ",
        description:`Chất vải : 3 sọc`,
        price:"420.000"
    }
    ,
    {
        link_img:"https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/248499309_630544551447205_6849034023088320644_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TXATSjVNtZEAX9ZBaI9&_nc_ht=scontent.fsgn5-10.fna&oh=54df008eb2e29e480c25d69ba04019a0&oe=61A725D9",
        title:"Võ phục Quyền MOOTO ",
        description:`Chất vải : 3 sọc`,
        price:"420.000"
    },
    {
        link_img:"https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/248499309_630544551447205_6849034023088320644_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TXATSjVNtZEAX9ZBaI9&_nc_ht=scontent.fsgn5-10.fna&oh=54df008eb2e29e480c25d69ba04019a0&oe=61A725D9",
        title:"Võ phục Quyền MOOTO ",
        description:`Chất vải : 3 sọc`,
        price:"420.000"
    },
    {
        link_img:"https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/248499309_630544551447205_6849034023088320644_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TXATSjVNtZEAX9ZBaI9&_nc_ht=scontent.fsgn5-10.fna&oh=54df008eb2e29e480c25d69ba04019a0&oe=61A725D9",
        title:"Võ phục Quyền MOOTO ",
        description:`Chất vải : 3 sọc`,
        price:"420.000"
    },
    {
        link_img:"https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/248499309_630544551447205_6849034023088320644_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TXATSjVNtZEAX9ZBaI9&_nc_ht=scontent.fsgn5-10.fna&oh=54df008eb2e29e480c25d69ba04019a0&oe=61A725D9",
        title:"Võ phục Quyền MOOTO ",
        description:`Chất vải : 3 sọc`,
        price:"420.000"
    }
    ,
    {
        link_img:"https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/248499309_630544551447205_6849034023088320644_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TXATSjVNtZEAX9ZBaI9&_nc_ht=scontent.fsgn5-10.fna&oh=54df008eb2e29e480c25d69ba04019a0&oe=61A725D9",
        title:"Võ phục Quyền MOOTO ",
        description:`Chất vải : 3 sọc`,
        price:"420.000"
    },
    {
        link_img:"https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/248499309_630544551447205_6849034023088320644_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TXATSjVNtZEAX9ZBaI9&_nc_ht=scontent.fsgn5-10.fna&oh=54df008eb2e29e480c25d69ba04019a0&oe=61A725D9",
        title:"Võ phục Quyền MOOTO ",
        description:`Chất vải : 3 sọc`,
        price:"420.000"
    },
    {
        link_img:"https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/248499309_630544551447205_6849034023088320644_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TXATSjVNtZEAX9ZBaI9&_nc_ht=scontent.fsgn5-10.fna&oh=54df008eb2e29e480c25d69ba04019a0&oe=61A725D9",
        title:"Võ phục Quyền MOOTO ",
        description:`Chất vải : 3 sọc`,
        price:"420.000"
    },
    {
        link_img:"https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/248499309_630544551447205_6849034023088320644_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TXATSjVNtZEAX9ZBaI9&_nc_ht=scontent.fsgn5-10.fna&oh=54df008eb2e29e480c25d69ba04019a0&oe=61A725D9",
        title:"Võ phục Quyền MOOTO ",
        description:`Chất vải : 3 sọc`,
        price:"420.000"
    }
    ,
    {
        link_img:"https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/248499309_630544551447205_6849034023088320644_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TXATSjVNtZEAX9ZBaI9&_nc_ht=scontent.fsgn5-10.fna&oh=54df008eb2e29e480c25d69ba04019a0&oe=61A725D9",
        title:"Võ phục Quyền MOOTO ",
        description:`Chất vải : 3 sọc`,
        price:"420.000"
    }
]
function ListItem(props) {
    return (
        <div className="ListItem">
            {
                List.map((item,index)=>(
                    <ItemPro product={item} key={index}/>
                ))
            }
       
        </div>
    );
}

export default ListItem;