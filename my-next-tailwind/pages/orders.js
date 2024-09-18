import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '@/components/pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { Heading } from '@/components/heading'
import { Button } from '@/components/button'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/dropdown';
import { EllipsisHorizontalIcon } from '@heroicons/react/16/solid';
import { Avatar } from '@/components/avatar';

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
            <div class="flex items-end justify-between gap-4">
              <Heading>Orders</Heading>
              <Button>Create order</Button>
            </div>
            <div class="flow-root">
                <div
                    class="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)] -mx-[--gutter] overflow-x-auto whitespace-nowrap">
                    <div class="inline-block min-w-full align-middle sm:px-[--gutter]">
                    <Table className="[--gutter:theme(spacing.6)] sm:[--gutter:theme(spacing.8)]">
                        <TableHead>
                            <TableRow>
                            <TableHeader>Order number</TableHeader>
                            <TableHeader>Purchase date</TableHeader>
                            <TableHeader>Customer</TableHeader>
                            <TableHeader>Event</TableHeader>
                            <TableHeader>Amount</TableHeader>
                            <TableHeader className="relative w-0">
                              <span className="sr-only">Actions</span>
                            </TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order, index) => (
                            <TableRow key={index} href={`/orders/${order.order}`}>
                                <TableCell className="font-medium">{order.orderId}</TableCell>
                                <TableCell>{order.purchaseDate}</TableCell>
                                <TableCell className="text-zinc-500">{order.customer}</TableCell>
                                <TableCell className="text-zinc-500">{order.event}</TableCell>
                                <TableCell className="text-zinc-500">
                                  <div class="flex gap-2">
                                    <Avatar className="size-6" src="https://catalyst-demo.tailwindui.com/events/bear-hug-thumb.jpg" />
                                    {order.event}
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                                    <Dropdown>
                                      <DropdownButton plain aria-label="More options">
                                        <EllipsisHorizontalIcon />
                                      </DropdownButton>
                                      <DropdownMenu anchor="bottom end">
                                        <DropdownItem>View</DropdownItem>
                                        <DropdownItem>Edit</DropdownItem>
                                        <DropdownItem>Delete</DropdownItem>
                                      </DropdownMenu>
                                    </Dropdown>
                                  </div>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Pagination className="mt-6">
                      <PaginationPrevious href="?page=2" />
                      <PaginationList>
                        <PaginationPage href="?page=1">1</PaginationPage>
                        <PaginationPage href="?page=2">2</PaginationPage>
                        <PaginationPage href="?page=3" current>
                          3
                        </PaginationPage>
                        <PaginationPage href="?page=4">4</PaginationPage>
                        <PaginationGap />
                        <PaginationPage href="?page=65">65</PaginationPage>
                        <PaginationPage href="?page=66">66</PaginationPage>
                      </PaginationList>
                      <PaginationNext href="?page=4" />
                    </Pagination>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Orders;