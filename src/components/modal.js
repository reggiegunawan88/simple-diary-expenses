import React, { useState } from "react";

const Modal = (props) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);

  function addData() {
    //get current time and date for created_at value
    let date = new Date();
    let today =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    let time =
      date.getHours() + ":" + "0" + date.getMinutes() + ":" + date.getSeconds();
    let time_result = today + " " + time;

    //create new obj data from input
    let newData = {
      cost: parseInt(cost),
      created_at: time_result,
      name: name,
    };

    //send update data to parent
    props.receivedNewData(newData);
    props.hideModal();
  }

  return (
    <>
      {props.showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">Tambah Entri</h3>
                </div>

                {/*body*/}
                <div className="p-6 text-left">
                  <p className="my-4 text-black text-lg">Nama</p>
                  <input
                    type="text"
                    className="border-gray-300 border h-10 rounded-md p-3"
                    style={{ width: 350 }}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <p className="my-4 text-black text-lg">Harga</p>
                  <input
                    type="number"
                    className="border-gray-300 border h-10 rounded-md p-3"
                    style={{ width: 350 }}
                    onChange={(e) => setCost(e.target.value)}
                  />
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    onClick={() => props.hideModal()}
                  >
                    BATAL
                  </button>
                  <button
                    className="bg-purple-600 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={addData}
                  >
                    KIRIM
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
