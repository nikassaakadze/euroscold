import React from 'react'
import {db, storage} from  '../util/firebase'
import {Popconfirm,message} from 'antd';
function ProductCard({name, hero, prodId, collId}) {
    //popconfirm
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const showPopconfirm = () => {
      setVisible(true);
    };
  
    const handleCancel = () => {
      setVisible(false);
    };
  const success = () => {
    message.success('ინფორმაცია წარმატებით წაიშალა');
  };

  const handleOk = () => {
    db.collection("products").doc(collId).collection("products").doc(prodId).delete().then(function() {
    }).catch(function(error) {
        console.log("Error removing document: ", error);
    });
    success()
  }
    return (
        <div className="product__loader__card">
        <div className="product__card__hero">
          <img src={hero} alt={name} />
        </div>
        <div className="productLoadCardFooter">
        <h4>{name}</h4>
        <Popconfirm
        title="ნამდვილად გსურთ წაშლა ?"
        visible={visible}
        onConfirm={handleOk}
        okButtonProps={{ loading: confirmLoading }}
        onCancel={handleCancel}
      >
        <button onClick={showPopconfirm}>წაშლა</button>
        </Popconfirm>
        </div>
      </div>
    )
}

export default ProductCard
