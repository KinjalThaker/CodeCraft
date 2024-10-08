import { Button } from '@/components/button'
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Field, Label } from '@/components/fieldset'
import { Input } from '@/components/input'
import { useState } from 'react'
import { Heading, Subheading } from '@/components/heading'
import { Divider } from '@/components/divider'
import { Avatar } from '@/components/avatar'

const OrderDetail = () => {
let [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div class="max-lg:hidden">
                <a class="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400"
                    data-headlessui-state="" href="/orders"><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon"
                        class="size-4 fill-zinc-400 dark:fill-zinc-500">
                        <path fill-rule="evenodd"
                            d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
                            clip-rule="evenodd"></path>
                    </svg>Orders</a>
            </div>
            <div class="mt-4 lg:mt-8">
                <div class="flex items-center gap-4">
                    <Heading>Order #3000</Heading>
                    <span
                        class="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-[hover]:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-[hover]:bg-lime-400/15">
                        Successful</span>
                </div>
                <div class="isolate mt-2.5 flex flex-wrap justify-between gap-x-6 gap-y-4">
                    <div class="flex flex-wrap gap-x-10 gap-y-4 py-1.5">
                        <span
                            class="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                aria-hidden="true" data-slot="icon"
                                class="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500">
                                <path fill-rule="evenodd"
                                    d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3Zm9 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM11.5 6A.75.75 0 1 1 13 6a.75.75 0 0 1-1.5 0Z"
                                    clip-rule="evenodd"></path>
                                <path
                                    d="M13 11.75a.75.75 0 0 0-1.5 0v.179c0 .15-.138.28-.306.255A65.277 65.277 0 0 0 1.75 11.5a.75.75 0 0 0 0 1.5c3.135 0 6.215.228 9.227.668A1.764 1.764 0 0 0 13 11.928v-.178Z"></path>
                            </svg>
                            <span>US$80.00</span>
                        </span>
                        <span
                            class="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                aria-hidden="true" data-slot="icon"
                                class="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500">
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5V5h14v-.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path>
                                <path fill-rule="evenodd"
                                    d="M15 7H1v4.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V7ZM3 10.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Zm3.75-.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="inline-flex gap-3">American Express <span><span aria-hidden="true">
                                ••••</span> 1254</span></span>
                        </span>
                        <span
                            class="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                aria-hidden="true" data-slot="icon"
                                class="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500">
                                <path fill-rule="evenodd"
                                    d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>May 9, 2024</span>
                        </span>
                    </div>
                    <div class="flex gap-4">
                        <Button outline onClick={() => setIsOpen(true)}><span
                                class="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                                aria-hidden="true"></span>Refund</Button>
                        <Button
                            class="relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&amp;>[data-slot=icon]]:-mx-0.5 [&amp;>[data-slot=icon]]:my-0.5 [&amp;>[data-slot=icon]]:size-5 [&amp;>[data-slot=icon]]:shrink-0 [&amp;>[data-slot=icon]]:text-[--btn-icon] [&amp;>[data-slot=icon]]:sm:my-1 [&amp;>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] border-transparent bg-[--btn-border] dark:bg-[--btn-bg] before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg] before:shadow dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay] dark:after:-inset-px dark:after:rounded-lg before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)] dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)] [--btn-icon:theme(colors.zinc.400)] data-[active]:[--btn-icon:theme(colors.zinc.300)] data-[hover]:[--btn-icon:theme(colors.zinc.300)] cursor-default"
                            type="button" data-headlessui-state=""><span
                                class="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
                                aria-hidden="true"></span>Resend Invoice
                        </Button>
                        <Dialog open={isOpen} onClose={setIsOpen}>
                            <DialogTitle>Refund payment</DialogTitle>
                            <DialogDescription>
                            The refund will be reflected in the customer’s bank account 2 to 3 business days after processing.
                            </DialogDescription>
                            <DialogBody>
                            <Field>
                                <Label>Amount</Label>
                                <Input name="amount" placeholder="$0.00" />
                            </Field>
                            </DialogBody>
                            <DialogActions>
                            <Button plain onClick={() => setIsOpen(false)}>
                                Cancel
                            </Button>
                            <Button onClick={() => setIsOpen(false)}>Refund</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </div>
            <div class="mt-12">
                <Subheading>Summary</Subheading>
                <Divider className="my-4" />
                <dl
                    class="grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,theme(spacing.80))_auto] sm:text-sm/6">
                    <dt
                        class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                        Customer</dt>
                    <dd
                        class="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&amp;:nth-child(2)]:border-none">Leslie
                        Alexander</dd>
                    <dt
                        class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                        Event</dt>
                    <dd
                        class="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&amp;:nth-child(2)]:border-none">
                        <a class="flex items-center gap-2" data-headlessui-state="" href="/events/1000">
                            <span data-slot="avatar"
                                class="size-6 inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1 outline outline-1 -outline-offset-1 outline-black/[--ring-opacity] dark:outline-white/[--ring-opacity] rounded-full *:rounded-full">
                                <Avatar src="https://catalyst-demo.tailwindui.com/events/bear-hug-thumb.jpg" />
                            </span>
                            <span>Bear Hug: Live in Concert</span>
                        </a>
                    </dd>
                    <dt
                        class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                        Amount</dt>
                    <dd
                        class="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&amp;:nth-child(2)]:border-none">
                        US$80.00</dd>
                    <dt
                        class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">Amount
                        after exchange rate</dt>
                    <dd
                        class="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&amp;:nth-child(2)]:border-none">US$80.00
                        → CA$109.47</dd>
                    <dt
                        class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                        Fee</dt>
                    <dd
                        class="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&amp;:nth-child(2)]:border-none">
                        CA$3.28</dd>
                    <dt
                        class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                        Net</dt>
                    <dd
                        class="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&amp;:nth-child(2)]:border-none">
                        CA$106.19</dd>
                </dl>
            </div>
            <div class="mt-12">
                <Subheading>Payment method</Subheading>
                <Divider className="my-4" />
                <dl
                    class="grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,theme(spacing.80))_auto] sm:text-sm/6">
                    <dt
                        class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">Transaction
                        ID</dt>
                    <dd
                        class="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&amp;:nth-child(2)]:border-none">
                        ch_2HLf8DfYJ0Db7asfCC5T546TY</dd>
                    <dt
                        class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">Card
                        number</dt>
                    <dd
                        class="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&amp;:nth-child(2)]:border-none">••••
                        1254</dd>
                    <dt
                        class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">Card
                        type</dt>
                    <dd
                        class="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&amp;:nth-child(2)]:border-none">American
                        Express</dd>
                    <dt
                        class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">Card
                        expiry</dt>
                    <dd
                        class="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&amp;:nth-child(2)]:border-none">01
                        / 2025</dd>
                    <dt
                        class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                        Owner</dt>
                    <dd
                        class="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&amp;:nth-child(2)]:border-none">Leslie
                        Alexander</dd>
                    <dt
                        class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">Email
                        address</dt>
                    <dd
                        class="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&amp;:nth-child(2)]:border-none">
                        leslie.alexander@example.com</dd>
                    <dt
                        class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                        Address</dt>
                    <dd
                        class="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&amp;:nth-child(2)]:border-none">123
                        Main St. Toronto, ON</dd>
                    <dt
                        class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                        Country</dt>
                    <dd
                        class="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&amp;:nth-child(2)]:border-none">
                        <span class="inline-flex gap-3">
                            <img src="https://catalyst-demo.tailwindui.com/flags/ca.svg" alt="Canada" />Canada
                        </span>
                    </dd>
                    <dt
                        class="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                        CVC</dt>
                    <dd
                        class="pb-3 pt-1 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 dark:text-white dark:sm:border-white/5 sm:[&amp;:nth-child(2)]:border-none">
                        <span
                            class="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-[hover]:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-[hover]:bg-lime-400/15">Passed
                            successfully</span>
                    </dd>
                </dl>
            </div>
        </>
    );
}
 
export default OrderDetail;