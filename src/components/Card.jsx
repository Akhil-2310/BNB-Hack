import React from 'react'

const Card = () => {
  return (
    <>
      <div className="flex m-12 space-x-12">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Privacy</h2>
            <p>All zk, enjoy your privacy</p>
          </div>
          <figure>
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kochiesbusinessbuilders.com.au%2Fsix-common-mistakes-small-businesses-make-with-their-privacy-policy%2F&psig=AOvVaw3UHWGRx-NLGQs6txizuGfe&ust=1714909948946000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDctsT384UDFQAAAAAdAAAAABAE"
              alt="Privacy"
            />
          </figure>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Anonymity</h2>
            <p>Be anonymous, don't let anyone know who you are </p>
          </div>
          <figure>
            <img
              src="https://michaelodohertybl.com/app/uploads/2021/03/Anonymous-pic.jpg"
              alt="Anonymity"
            />
          </figure>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Community</h2>
            <p>Be a part of the community</p>
          </div>
          <figure>
            <img
              src="https://twofacesofms.files.wordpress.com/2020/06/community.jpg"
              alt="Community"
            />
          </figure>
        </div>
      </div>
    </>
  );
}

export default Card
