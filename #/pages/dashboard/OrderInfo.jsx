import SvgDropdown from "icons/SvgDropdown";
import SvgPrint from "icons/SvgPrint";
import OrderProgress from "./OrderProgress";
import { Collapse } from "react-collapse";
import { useState } from "react";
import clsx from "clsx";
import Moment from "react-moment";

function OrderInfo(props) {
  const [detailsMenu, setDetailsMenu] = useState(false);
  const [progressMenu, setProgressMenu] = useState(false);

  const orderProgress = {
    order: {
      yes: true,
      week: `Thursday`,
      date: `27.01.2022`,
      time: `22:00 Local Time`,
    },

    shipped: {
      yes: true,
      week: `Friday`,
      date: `28.01.2022`,
      time: `19:31 Local Time`,
      time2: `19:31 Local Time`,
    },
    delivered: {
      yes: false,
      week: `Saturday`,
      date: `29.01.2022`,
      time: `15:43 Local Time`,
    },
  };

  return (
    <div className="bg-[#F6F8FC] | px-5 py-10 space-y-7">
      <h3 className="text-3xl font-semibold font-exo">Tracking</h3>

      <div className="bg-white | p-5 | space-y-14">
        <div className="fcb">
          <p className="font-medium">Tracking Code: {props.orderUuid}</p>

          <button className="fcc px-10 py-3 rounded-md | form-button border border-orange-primary text-orange-primary font-bold active:scale-95 duration-200">
            Print <SvgPrint className="ml-3 h-4" />
          </button>
        </div>

        <div className="order__details">
          <div
            className="filter__brands__btn | fcb | cursor-pointer"
            onClick={() => setProgressMenu(!progressMenu)}
          >
            <p className="font-semibold text-lg">Details</p>
            <SvgDropdown
              className={clsx({
                "h-2.5 text-[#FB421A] duration-200": true,
                "-rotate-90": !progressMenu,
                "-rotate-0": progressMenu,
              })}
            />
          </div>

          <Collapse isOpened={progressMenu}>
            <div className="order__details__content | space-y-3 | py-5">
              <div className="fcb">
                <p className="font-semibold">Tracking ID</p>
                <p className="text-sm">{props.orderUuid}</p>
              </div>

              {
                props.orderData?.products.map((item, ind) =>
                    <div key={ind} className="product__details space-y-7">
                      <div className="product__description | space-y-3">
                        <h3 className="py-2">{item.title.en}</h3>
                        <p className="opacity-70 text-[#16171E] w-2/3 text-sm">{item.description.en}</p>
                      </div>

                      <div className="product__details | space-y-5 | pt-3">
                        <h3 className="font-bold border-b border-opacity-30 border-black"></h3>
                        {[
                          {
                            title: `Reference no.`,
                            value: `BP0743287_UP`,
                          },
                          {
                            title: `Brand`,
                            value: `Volvo`,
                          },
                          {
                            title: `Reference no.`,
                            value: `BP0743287_UP`,
                          },
                          {
                            title: `Brand`,
                            value: `Volvo`,
                          },
                        ].map((detail, index) => (
                            <div
                                className="flex justify-between items-center"
                                key={index}
                            >
                              <div className="title text-sm">{detail.title}</div>

                              <div className="border-b border-dashed border-gray-300 flex-grow text-white mx-3 -mt-4">
                                12
                              </div>

                              <div className="value text-[#30C5FF] text-sm">
                                {detail.value}
                              </div>
                            </div>
                        ))}
                      </div>
                    </div>
                )
              }


            </div>
          </Collapse>
        </div>

        <div className="order__tracking | space-y-7">
          <div
            className="filter__brands__btn | fcb | cursor-pointer"
            onClick={() => setDetailsMenu(!detailsMenu)}
          >
            <p className="font-semibold text-lg">Tracking</p>
            <SvgDropdown
              className={clsx({
                "h-2.5 text-[#FB421A] duration-200": true,
                "-rotate-90": !detailsMenu,
                "-rotate-0": detailsMenu,
              })}
            />
          </div>

          <Collapse isOpened={detailsMenu}>
            <div className="order__progress__indicactor duration-200">
              <OrderProgress step={3} />

              <div className="w-full flex justify-between">
                <div className="ordere | space-y-2 pt-3 pl-1">
                  <h3 className="font-bold text-[#16171E]">Ordered</h3>
                  <p className="text-sm text-[#353437] opacity-70">Thursday</p>
                  <h3 className="font-bold text-[#16171E]">27.01.2022</h3>
                  <p className="text-sm text-[#353437] opacity-70">
                    22:00 Local Time
                  </p>
                </div>

                <div className="shipped | space-y-2 pt-3 pl-1">
                  <h3 className="font-bold text-[#16171E]">Shipped</h3>
                  <p className="text-sm text-[#353437] opacity-70">Thursday</p>
                  <h3 className="font-bold text-[#16171E]">28.01.2022</h3>
                  <p className="text-sm text-[#353437] opacity-70">
                    19:31 Local Time
                  </p>
                  <p className="text-sm text-[#353437] opacity-70">
                    5:01 Local Time
                  </p>
                </div>

                <div className="shipped | space-y-2 pt-3 pl-1">
                  <h3 className="font-bold text-[#16171E] w-10">
                    Estimated Delivery
                  </h3>
                  <p className="text-sm text-[#353437] opacity-70">Thursday</p>
                  <h3 className="font-bold text-[#16171E]">29.01.2022</h3>
                  <p className="text-sm text-[#353437] opacity-70">
                    15:43 Local Time
                  </p>
                </div>
              </div>
            </div>

            <div className="updates px-1 pt-10 | space-y-5">
              <h3 className="font-bold text-[#16171E] text-2xl">Updates</h3>

              <div className="fcb | border-b border-[#E0E0E0] border-opacity-60 pb-2">
                <h3 className="font-bold text-[#16171E] text-lg w-1/2">Data</h3>
                <h3 className="font-bold text-[#16171E] text-lg w-1/2">
                  Places
                </h3>
              </div>
              {props.orderData?.routes?.map((d, index) => (
                <div
                  key={index}
                  className="flex justify-between | border-b border-[#E0E0E0] border-opacity-60 py-5"
                >
                  <div className="ordere | space-y-2 w-1/2">
                    <p className="text-sm text-[#353437] opacity-70">
                      Thursday
                    </p>
                    <h3 className="font-bold text-[#16171E]">
                      <Moment format="DD.MM.YYYY">
                        {d.updated_at}
                      </Moment>
                    </h3>
                    <p className="text-sm text-[#353437] opacity-70">
                      <Moment format="hh.mm">{d.updated_at}</Moment> Local Time
                    </p>
                  </div>

                  <div className="ordere | space-y-2 w-1/2">
                    <h3 className="font-bold text-[#16171E] hover:text-orange-primary duration-150 text-left w-full">
                      {d.title.en}
                    </h3>
                    <p className="text-sm text-[#353437] opacity-70">
                      Paris, France
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;
