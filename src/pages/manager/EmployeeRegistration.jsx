import React from 'react'
import InputField from '../../components/InputField'
import { Radio } from "@material-tailwind/react";
import {
    Input,
    Popover,
    PopoverHandler,
    PopoverContent,
  } from "@material-tailwind/react";
  import { format } from "date-fns";
  import { DayPicker } from "react-day-picker";
  import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function EmployeeRegistration({reason,employee='none'}) {
    const [date, setDate] = React.useState()
  return (
    <form className='flex w-full h-full justify-center px-3'>
        <div className='flex gap-3 flex-col pt-4'>
            <div className='text-gray-500 self-center font-semibold'>Employee registration</div>
            {/*full name*/}
            <div className='flex gap-6'>
                <div className='flex flex-col'>
                    <label className='text-gray-500'>First name</label>
                    <InputField type='text'/>
                </div>
                <div className='flex flex-col'>
                    <label className='text-gray-500'>Last name</label>
                    <InputField type='text'/>
                </div>
            </div>
            {/*birthday and gender*/}
            <div className='flex items-center'>
                <div className="">
                    <Popover placement="bottom">
                        <PopoverHandler>
                            <Input
                                label="Date of birth"
                                onChange={() => null}
                                value={date ? format(date, "PPP") : ""}
                            />
                        </PopoverHandler>
                        <PopoverContent>
                            <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            showOutsideDays
                            className="border-0"
                            classNames={{
                            caption: "flex justify-center py-2 mb-4 relative items-center",
                            caption_label: "text-sm font-medium text-gray-900",
                            nav: "flex items-center",
                            nav_button:
                                "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                            nav_button_previous: "absolute left-1.5",
                            nav_button_next: "absolute right-1.5",
                            table: "w-full border-collapse",
                            head_row: "flex font-medium text-gray-900",
                            head_cell: "m-0.5 w-9 font-normal text-sm",
                            row: "flex w-full mt-2",
                            cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                            day: "h-9 w-9 p-0 font-normal",
                            day_range_end: "day-range-end",
                            day_selected:
                                "rounded-md bg-red-500 text-white hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white",
                            day_today: "rounded-md bg-gray-200 text-gray-900",
                            day_outside:
                                "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                            day_disabled: "text-red-500 opacity-50",
                            day_hidden: "invisible",
                            }}
                            components={{
                            IconLeft: ({ ...props }) => (
                                <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                            ),
                            IconRight: ({ ...props }) => (
                                <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                            ),
                            }}
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className='flex gap-1'>
                    <Radio name="type" label='Male' className='border-stone-400' color='red'/>
                    <Radio name="type" label='Female' className='border-stone-400' color='red' defaultChecked />
                </div>

            </div>
            {/*email and physical*/}
            <div className='flex gap-6'>
                <div className='flex flex-col'>
                    <label className='text-gray-500'>Email</label>
                    <InputField type='email'/>
                </div>
                <div className='flex flex-col'>
                    <label className='text-gray-500'>Physical address</label>
                    <InputField type='text'/>
                </div>
            </div>
            {/*phone number and ID/Passport*/}
            <div className='flex gap-6'>
                <div className='flex flex-col'>
                    <label className='text-gray-500'>Phone number</label>
                    <InputField type='email'/>
                </div>
                <div className='flex flex-col'>
                    <label className='text-gray-500'>ID/Passport number</label>
                    <InputField type='text'/>
                </div>
            </div>
            {/*position and date of employment*/}
            <div className='flex items-center py-2 gap-6'>
                <div className='flex flex-col'>
                    <label className='text-gray-500'>Job position</label>
                    <InputField type='text'/>
                </div>
                <div className="">
                    <Popover placement="bottom">
                        <PopoverHandler>
                            <Input
                                label="Sart Date"
                                onChange={() => null}
                                value={date ? format(date, "PPP") : ""}
                            />
                        </PopoverHandler>
                        <PopoverContent>
                            <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            showOutsideDays
                            className="border-0"
                            classNames={{
                            caption: "flex justify-center py-2 mb-4 relative items-center",
                            caption_label: "text-sm font-medium text-gray-900",
                            nav: "flex items-center",
                            nav_button:
                                "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                            nav_button_previous: "absolute left-1.5",
                            nav_button_next: "absolute right-1.5",
                            table: "w-full border-collapse",
                            head_row: "flex font-medium text-gray-900",
                            head_cell: "m-0.5 w-9 font-normal text-sm",
                            row: "flex w-full mt-2",
                            cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                            day: "h-9 w-9 p-0 font-normal",
                            day_range_end: "day-range-end",
                            day_selected:
                                "rounded-md bg-red-500 text-white hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white",
                            day_today: "rounded-md bg-gray-200 text-gray-900",
                            day_outside:
                                "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                            day_disabled: "text-red-500 opacity-50",
                            day_hidden: "invisible",
                            }}
                            components={{
                            IconLeft: ({ ...props }) => (
                                <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                            ),
                            IconRight: ({ ...props }) => (
                                <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                            ),
                            }}
                            />
                        </PopoverContent>
                    </Popover>
                </div>

            </div>
            <div className={`flex self-center p-2 flex-col bg-red-500 w-[200px] h-[50px]
            text-white rounded-[4px] items-center justify-center
            hover:bg-red-400 font-semibold cursor-pointer`}>
                <div>Save</div>
            </div> 
        </div>
    </form>
  )
}
