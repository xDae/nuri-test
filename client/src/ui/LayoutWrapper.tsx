import React from 'react';

interface Props {
  title?: string;
  children?: any
}

const LayoutWrapper = (props: Props) => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="p-4">
            <h1 className="text-2xl font-semibold leading-tight text-gray-700">{props.title}</h1>
          </div>

          <div className="bg-white shadow-md rounded mb-6">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;