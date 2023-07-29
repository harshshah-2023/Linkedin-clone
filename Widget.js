import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widget() {
    const newArticle=(heading,subtitle)=>(
        <div className="widget_article flex pt-2 hover:bg-slate-200 ">
            <div className="widget_articlelleft">
            <FiberManualRecordIcon/>
            </div>
            <div className="widget arucle_right">
                <h4 className='font-semibold'>{heading}</h4>
                <p>{subtitle}</p>

            </div>
        </div>
    );

  return (
    <div className='widget sticky top-14 flex-[0.2] bg-white mx-1 my-3 border-gray-200 bottom-2 pb-2 rounded-md md:mr-40 '>
        <div className="widget_header text-lg font-semibold flex space-x-1 justify-center">
            <h2 className=''>Linkedin News</h2>
            <InfoIcon/>
        </div>
        {newArticle("Heavy Rainfall in mumbai","Top new-9234 reader")}
        {newArticle("Heat wave returns as Greece grapples with more wildfire evacuations","Top new-9223 reader")}
        {newArticle("Ron DeSantis cannot ‘evade responsibility for his actions’, Disney rejects immunity request in legal feud","Top new-8234 reader")}
        {newArticle("Bitcoin consolidates below $30,000 as market books profits after the last week’s rally","Top new- trending")}
        {newArticle("Elon Musk explains the reason behind Twitter’s rebranding as X","Top news-trending")}
    </div>
  )
}

export default Widget