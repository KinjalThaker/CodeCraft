import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { Field, Label } from '@/components/fieldset'
import { Select } from '@/components/select'
import { Heading, Subheading } from '@/components/heading'
import { Divider } from '@/components/divider'

const orders = [
  {
    'orderId': 3000,
    'purchaseDate': 'May 9, 2024',
    'customer': 'Leslie Alexander',
    'event': 'Bear Hug: Live in Concert',
    'amount': 80.00
  },
  {
    'orderId': 3001,
    'purchaseDate': 'May 9, 2024',
    'customer': 'Leslie Alexander',
    'event': 'Bear Hug: Live in Concert',
    'amount': 80.00
  },
  {
    'orderId': 3002,
    'purchaseDate': 'May 9, 2024',
    'customer': 'Leslie Alexander',
    'event': 'Bear Hug: Live in Concert',
    'amount': 80.00
  },
  {
    'orderId': 3003,
    'purchaseDate': 'May 9, 2024',
    'customer': 'Leslie Alexander',
    'event': 'Bear Hug: Live in Concert',
    'amount': 80.00
  },
  {
    'orderId': 3004,
    'purchaseDate': 'May 9, 2024',
    'customer': 'Leslie Alexander',
    'event': 'Bear Hug: Live in Concert',
    'amount': 80.00
  },
  {
    'orderId': 3005,
    'purchaseDate': 'May 9, 2024',
    'customer': 'Leslie Alexander',
    'event': 'Bear Hug: Live in Concert',
    'amount': 80.00
  },
  {
    'orderId': 3006,
    'purchaseDate': 'May 9, 2024',
    'customer': 'Leslie Alexander',
    'event': 'Bear Hug: Live in Concert',
    'amount': 80.00
  },
  {
    'orderId': 3007,
    'purchaseDate': 'May 9, 2024',
    'customer': 'Leslie Alexander',
    'event': 'Bear Hug: Live in Concert',
    'amount': 80.00
  },
  {
    'orderId': 3008,
    'purchaseDate': 'May 9, 2024',
    'customer': 'Leslie Alexander',
    'event': 'Bear Hug: Live in Concert',
    'amount': 80.00
  },
  {
    'orderId': 3009,
    'purchaseDate': 'May 9, 2024',
    'customer': 'Leslie Alexander',
    'event': 'Bear Hug: Live in Concert',
    'amount': 80.00
  },
];

const Orders = () => {
    return (
        <div class="mx-auto max-w-6xl">
            <Heading>Orders</Heading>
            <div class="flow-root">
                <div
                    class="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)] -mx-[--gutter] overflow-x-auto whitespace-nowrap">
                    <div class="inline-block min-w-full align-middle sm:px-[--gutter]">
                        <Table>
                        <TableHead>
                            <TableRow>
                            <TableHeader>Order number</TableHeader>
                            <TableHeader>Purchase date</TableHeader>
                            <TableHeader>Customer</TableHeader>
                            <TableHeader>Event</TableHeader>
                            <TableHeader>Amount</TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order, index) => (
                            <TableRow key={index} href={`/orders/${order.order}`}>
                                <TableCell className="font-medium">{order.orderId}</TableCell>
                                <TableCell>{order.purchaseDate}</TableCell>
                                <TableCell className="text-zinc-500">{order.customer}</TableCell>
                                <TableCell className="text-zinc-500">{order.event}</TableCell>
                                <TableCell className="text-zinc-500">US $ {order.amount}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Orders;