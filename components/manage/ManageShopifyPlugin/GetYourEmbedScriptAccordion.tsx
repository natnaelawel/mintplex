import clsx from 'clsx';
import { FormikContextType, useFormikContext } from 'formik';
import React, { useState } from 'react'
import { useManageShopifyPluginContext } from '../../../context/ManageShopifyPluginContext';
import { ApplicationType } from '../../../types/applications';

type Props = {}


const getNetworkInfo = (network: string) => {
    switch (network) {
        case "ethereum": {
            return {
                mainnet: {
                    name: "ethereum",
                    chainName: "Ethereum"
                },
                testnet: {
                    name: "ethereum",
                    chainName: "Ethereum"
                }
            }
        }
        case "polygon": {
            return {
                mainnet: {
                    name: "polygon",
                    chainName: "Polygon"
                },
                testnet: {
                    name: "mumbai",
                    chainName: "Mumbai"
                }
            }
        }
        case "optimism": {
            return {
                mainnet: {
                    name: "optimism",
                    chainName: "Optimism"
                },
                testnet: {
                    name: "goerliOptimism",
                    chainName: "Goerli Optimism"
                }
            }
        }
        case "arbitrum": {
            return {
                mainnet: {
                    name: "arbitrum",
                    chainName: "Arbitrum"
                },
                testnet: {
                    name: "goerliArbitrum",
                    chainName: "Goerli Arbitrum"
                }
            }
        }
        case "avalanche": {
            return {
                mainnet: {
                    name: "avalanche",
                    chainName: "Avalanche"
                },
                testnet: {
                    name: "testnetAvalanche",
                    chainName: "Testnet Avalanche"
                }
            }
        }
        case "bnb chain": {
            return {
                mainnet: {
                    name: "binance",
                    chainName: "BNB Mainnet"
                },
                testnet: {
                    name: "testnetbinance",
                    chainName: "BNB Testnet"
                }
            }
        }
    }
}

const GetYourEmbedScriptAccordion = (props: Props) => {

    const [active, setActive] = useState(true);
    const formik: FormikContextType<ApplicationType> = useFormikContext()

    return (
        <>
            <div
                onClick={() => setActive((prev) => !prev)}
                className="flex items-center justify-between hover:bg-gray-100 rounded-lg py-2 mt-8 cursor-pointer"
            >
                <div className="flex space-x-2 items-center">
                    <h2 className="font-semibold text-xl text-gray-800">
                        Get your embed script!
                    </h2>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={clsx(
                        "transition duration-500 ease-in-out",
                        active ? "0" : "rotate-180"
                    )}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
            </div>
            <div
                className={clsx(
                    " transition ease-in-out duration-[2000ms] delay-300",
                    active ? "block" : "hidden"
                )}
            >
                <a
                    href="https://youtu.be/FSCCY_w2PRU"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 my-2 rounded-lg border border-blue-600 text-blue-600 bg-blue-100 w-full flex justify-center items-center cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 mr-2"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    <p>
                        If you have never set up this plugin before - view our tutorial!
                    </p>
                </a>
                <div className="w-full flex-col space-y-4 my-4">
                    <div className="flex-col space-y-1">
                        <p className="text-gray-600 text-lg">{getNetworkInfo(formik.values.network || "")?.testnet.chainName}</p>
                        <p className="text-gray-600 text-xs">
                            Copy this embed HTML code into your shop to allow people to
                            verify their holdings on the Goerli Optimism network.
                        </p>
                    </div>
                    <div
                        data-tip="Click to copy to clipboard"
                        className="border border-gray-600 bg-gray-100 p-2 rounded-md cursor-pointer overflow-x-hidden"
                    >
                        <pre className="text-gray-500 text-xs break-all flex  flex-wrap p-3">
                            <br />
                            &lt;!-- Plugin provided by Sekanson --&gt;
                            <br />
                            &lt;script <br />
                            &nbsp;data-plugin-id=&ldquo;{formik.values.uid}&ldquo; <br />
                            &nbsp;data-network=&ldquo;{getNetworkInfo(formik.values.network || "")?.testnet.name}&ldquo; <br />
                            &nbsp;data-styles=&ldquo;eyJzcmMiOiJodHRwczovL3lvdXJjb3JlaHViLmNvbS9zZWthbnNvbi9lbWJlZHMvYmFubmVyIiwid2lkdGgiOiIxMDAlIiwiaGVpZ2h0IjoiODBweCIsImJvcmRlciI6Im5vbmUiLCJvdmVyZmxvdyI6ImhpZGRlbiAhaW1wb3J0YW50In0=&ldquo; <br />
                            &nbsp;data-token-id=&ldquo;&ldquo; type=&ldquo;text/javascript&ldquo; <br />
                            &nbsp;src=&ldquo;https://yourcorehub.com/sekanson/resources/setup.js&ldquo; <br />
                            &gt;&lt;/script&gt;
                            <br />
                            &lt;!-- End Sekanson Plugin --&gt;
                            <br />
                        </pre>
                    </div>
                </div>
                <div className="w-full flex-col space-y-4 my-4">
                    <div className="flex-col space-y-1 ">
                        <p className="text-gray-600 text-lg">
                            {getNetworkInfo(formik.values.network || "")?.mainnet.chainName}
                        </p>
                        <p className="text-gray-600 text-xs">
                            Copy this embed HTML code into your shop to allow people to
                            verify their holdings on the Optimism network.
                        </p>
                    </div>
                    <div className="relative border border-gray-600 bg-gray-100 p-5 h-fit min-h-[150px] rounded-md overflow-x-hidden">
                        {/* <div className="w-full h-full flex justify-center items-center absolute z-10">
                            <button
                                type="button"
                                className="bg-ramppblue text-white rounded-md px-4 py-1"
                            >
                                Pay to unlock this plugin!
                            </button>
                        </div> */}
                        <pre
                            data-tip="Click to copy to clipboard"
                            className="relative text-gray-500 text-xs break-all"
                        // style={{ filter: "blur(7px)", zIndex: 1 }}
                        >
                            <br />
                            &lt;!-- Plugin provided by Sekanson --&gt;
                            <br />
                            &lt;script <br />
                            &nbsp;data-plugin-id=&ldquo;{formik.values.uid}&ldquo; <br />
                            &nbsp;data-network=&ldquo;{getNetworkInfo(formik.values.network || "")?.mainnet.name}&ldquo; <br />
                            &nbsp;data-styles=&ldquo;eyJzcmMiOiJodHRwczovL3lvdXJjb3JlaHViLmNvbS9zZWthbnNvbi9lbWJlZHMvYmFubmVyIiwid2lkdGgiOiIxMDAlIiwiaGVpZ2h0IjoiODBweCIsImJvcmRlciI6Im5vbmUiLCJvdmVyZmxvdyI6ImhpZGRlbiAhaW1wb3J0YW50In0=&ldquo; <br />
                            &nbsp;data-token-id=&ldquo;&ldquo; type=&ldquo;text/javascript&ldquo; <br />
                            &nbsp;src=&ldquo;https://yourcorehub.com/sekanson/resources/setup.js&ldquo; <br />
                            &gt;&lt;/script&gt;
                            <br />
                            &lt;!-- End Sekanson Plugin --&gt;
                            <br />
                        </pre>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GetYourEmbedScriptAccordion