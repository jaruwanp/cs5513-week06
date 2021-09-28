import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

import { getResourceIds, getResourceData } from '../../lib/persons';

export async function getStaticProps({ params }) {
  const itemData = await getResourceData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = await getResourceIds();
  // console.log(paths);
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  console.log(itemData);
  return (

<Layout>
      {/* render details about one entity in persons.json saved in itemData */}


      <article className="card col-8">
        <h2>Person Detail</h2>
        <div className="card-body">
          
          <h5 className="card-title">
          {itemData ? 
          itemData.data.name
          :null}
          </h5>
          
          <h6 className="card-text mb-2">
          TEL: { }
          {itemData ?
          itemData.data.phone
          :null}
         </h6>

          <h6 className="card-text mb-2">
          Birth Date: { } 
          {itemData ?
          itemData.data.birthdate
          :null}
          </h6>

          {itemData?
          <a href={'mailto:' + 
          itemData.data.email} className="card-link"><small>{itemData.data.email}</small></a>
          :null
          }


          {itemData?
          itemData.data.url?
          <p><small>
           <Link href={itemData.data.url}>
                <a className="card-Link" target="_blank">{itemData.data.url}</a>
            </Link>
         </small> </p>
          :null
          :null
          }

        </div>
      </article>
      {/* render details about all other entities in persons.json related to id */}
      <div className="list-group col-6">
        {/* check for existence of itemData.related property */}

        
        {
          itemData?
          itemData.data.relatedid ? 
          <h2>Related Persons</h2> : null
          :null
        }
        {
          itemData?
          itemData.data.relatedid ? 
          itemData.data.relatedid.map(
            ({ id, name }) => (
              <Link key={id} href={`/${id}`}>
                <a className="list-group-item list-group-item-action">N/A</a>
              </Link>
            )
          )

          : null
          : null
        }


        {/* using expression ? ... : null */}
      </div>
      
      
    </Layout>





    


  );
}