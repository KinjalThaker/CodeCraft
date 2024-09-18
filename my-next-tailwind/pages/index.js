import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { Select } from '@/components/select'
import { Heading, Subheading } from '@/components/heading'
import { Divider } from '@/components/divider'
import { Badge } from '@/components/badge';
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

export default function Home() {
  return (
    <>
      <Heading>Good afternoon, Erica</Heading>
      <div class="mt-8 flex items-end justify-between">
          <Subheading>Overview</Subheading>
          <div>
            <span data-slot="control"
                class="group relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent after:has-[[data-focus]]:ring-2 after:has-[[data-focus]]:ring-blue-500 has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none">
                <Select aria-label="Order status" name="status">
                  <option value="active">Active</option>
                  <option value="paused">Paused</option>
                  <option value="delayed">Delayed</option>
                  <option value="canceled">Canceled</option>
                </Select>
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                      class="size-5 stroke-zinc-500 group-has-[[data-disabled]]:stroke-zinc-600 sm:size-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]"
                      viewBox="0 0 16 16" aria-hidden="true" fill="none">
                      <path d="M5.75 10.75L8 13L10.25 10.75" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"></path>
                      <path d="M10.25 5.25L8 3L5.75 5.25" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"></path>
                  </svg>
                </span>
            </span>
          </div>
      </div>
      <div class="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          <div>
              <Divider className="my-4" />
              <div class="mt-6 text-lg/6 font-medium sm:text-sm/6">Total revenue</div>
              <div class="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">$2.6M</div>
              <div class="mt-3 text-sm/6 sm:text-xs/6">
                <Badge color='lime'>+4.5%</Badge>
                <span class="text-zinc-500">from last week</span>
              </div>
          </div>
          <div>
              <Divider className="my-4" />
              <div class="mt-6 text-lg/6 font-medium sm:text-sm/6">Average order value</div>
              <div class="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">$455</div>
              <div class="mt-3 text-sm/6 sm:text-xs/6">
                <Badge color='rose'>-0.5%</Badge>
                  <span class="text-zinc-500">from last week</span>
              </div>
          </div>
          <div>
              <Divider className="my-4" />
              <div class="mt-6 text-lg/6 font-medium sm:text-sm/6">Tickets sold</div>
              <div class="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">5,888</div>
              <div class="mt-3 text-sm/6 sm:text-xs/6">
                <Badge color='lime'>+4.5%</Badge>
                <span class="text-zinc-500">from last week</span>
              </div>
          </div>
          <div>
              <Divider className="my-4" />
              <div class="mt-6 text-lg/6 font-medium sm:text-sm/6">Pageviews</div>
              <div class="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">823,067</div>
              <div class="mt-3 text-sm/6 sm:text-xs/6">
                <Badge color='lime'>+21.2%</Badge>
                <span class="text-zinc-500">from last week</span>
              </div>
          </div>
      </div>
      <Subheading className="mt-14">Recent orders</Subheading>
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
                        <TableRow key={index} href={`/orders/${order.orderId}`}>
                          <TableCell className="font-medium">{order.orderId}</TableCell>
                          <TableCell>{order.purchaseDate}</TableCell>
                          <TableCell className="text-zinc-500">{order.customer}</TableCell>
                          <TableCell className="text-zinc-500">
                            <div class="flex gap-2">
                              <Avatar className="size-6" src="https://catalyst-demo.tailwindui.com/events/bear-hug-thumb.jpg" />
                              {order.event}
                            </div>
                            </TableCell>
                          <TableCell className="text-zinc-500">US ${order.amount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                </Table>
              </div>
          </div>
      </div>
    </>
  );
}