/* eslint-disable array-callback-return */
import {  pencil, closeIcon } from "../../../Image";

interface Ilist{
  edit?: any;
  delete?: any;
  items: any[];
}

export function ListBeneficialOwners(props:Ilist){

    return (
<>


<div className=" mt-5 ">

<b className="lg:text-[15px] sm:text-[13px] pb-1 font-medium">
                    Management & Ownership
                  </b>
                  
          {props.items.map((Owner:any,key:any)=>{
            if(Owner){
            return (
              <div key={key}>
            <div className="relative flex justify-between rounded-[13px] border p-3 lg:text-[15px] sm:text-[13px] text-[#747A80] bg-[#FFFCF1]">
              <div>
                <p className="mb-2 text-[13px]">{Owner.FirstName} {Owner.LastName}</p>

                <p className=" pb-2">
                  {Owner?.Email}
                </p>
               {Owner.Address &&
               <> 
                <p className=" pb-2">
                  {Owner.Address?.StreetAddress}
                </p>
                <p className="space-x-2">
                  <span>
                    {Owner.Address?.City},
                  </span>
                  <span>
                    {Owner.Address?.Country}
                  </span>
                </p>
              </>}
              </div>
                
            {props.edit && 
            <img
              className="xl:w-[15px] lg:w-[12px] md:w-[15px] sm:w-[12px] xs:w-[10px] absolute  xl:ml-[340px] lg:ml-[260px] md:ml-[270px] xs:ml-[110px]
              sm:ml-52  cursor-pointer"
              src={pencil}
              onClick={()=> props.edit(key || 0)}
              alt=""
            />}

            {props.delete && 
            <img
              className="w-[12px] absolute sm:ml-56 md:ml-[90%] cursor-pointer"
              src={closeIcon}
              onClick={()=> props.delete(key || 0)}
              alt=""
            />}
            &nbsp;
            &nbsp;
          </div>
          <br/>
          </div>
            )
          };
          })
        }
        </div>

</>
    );
}