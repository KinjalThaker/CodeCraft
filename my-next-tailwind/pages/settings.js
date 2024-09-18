import { Divider } from "@/components/divider";
import { Code, Text, TextLink } from "@/components/text";
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/dialog'
import { Field, Label } from '@/components/fieldset'
import { Input } from '@/components/input'
import { useState } from 'react'
import { Button } from "@/components/button";

const Settings = () => {
    let [isOpen, setIsOpen] = useState(false)

    return (
        <div class="relative grid gap-[17px] sm:grid-cols-2 xl:grid-cols-[repeat(15,_minmax(0,_1fr))]">
            {/*<div>Text Styling</div>
            <Text>
                Your new API token is <Code>BaVrRKpRMS_ndKU</Code>. Store this token somewhere safe as it will only be displayed
                once.
            </Text>
            <Text>
                Deleting your account is permanent, and your data will not be able to be recovered. If you still want to use this
                account in the future, learn about <TextLink href="#">pausing your subscription</TextLink> instead.
            </Text>
            <Divider />*/}
            <div class="relative xl:col-span-5">
                <div class="relative h-full w-full rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
                    <div class="grid h-full w-full justify-items-center overflow-hidden place-items-center p-6 py-8 sm:p-8 lg:p-12">
                        <div class="flex gap-x-6">
                            <Button>Button</Button>
                            <Button outline>Button</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative xl:col-span-5">
                <div class="relative h-full w-full rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
                    <div class="grid h-full w-full justify-items-center overflow-hidden place-items-center p-6 py-8 sm:p-8 lg:p-12">
                        <div class="flex gap-x-6">
                            <Button type="button" onClick={() => setIsOpen(true)}>Open Dilog</Button>
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
            </div>
        </div>
    );
}
 
export default Settings;