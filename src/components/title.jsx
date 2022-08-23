import React from 'react';
function Title({name,title}) {
    return ( 
        <div className='row'>
            <div className="col-10 mx-auto my-2 txt-center text-title">
                <h1 className="text-apitialize font-weght-bold">
                    {name} <strong className='text-blue'>{title}</strong>
                </h1>
            </div>
        </div>
     );
}

export default Title;