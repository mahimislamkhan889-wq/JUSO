import React, { useState, useEffect } from 'react';
import { CustomerOrder, OrderStatus } from '../types.ts';
import { formatTaka } from '../utils/orderCalculator.ts';
import { X, Package, Check, Download, Trash2, RefreshCw, Phone, MapPin } from 'lucide-react';

interface AdminOrdersDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminOrdersDrawer: React.FC<AdminOrdersDrawerProps> = ({ isOpen, onClose }) => {
  const [orders, setOrders] = useState<CustomerOrder[]>([]);
  const [filter, setFilter] = useState<'all' | OrderStatus>('all');

  const loadOrders = () => {
    try {
      const stored = localStorage.getItem('juso_orders');
      if (stored) {
        setOrders(JSON.parse(stored));
      } else {
        // Initial sample orders for preview
        const initialSamples: CustomerOrder[] = [
          {
            id: 'JUSO-BD-9042',
            customerName: 'তানভীর আহমেদ',
            phone: '01711223344',
            address: 'বাড়ি ১২, রোড ৭, ধানমন্ডি, ঢাকা',
            deliveryZone: 'dhaka',
            deliveryFee: 0,
            paymentMethod: 'cod',
            item: {
              packageId: 'family-pack',
              packageName: 'জনপ্রিয় ফ্যামিলি প্যাক (২০ টি স্যাশে)',
              quantity: 1,
              unitPrice: 850,
              totalPrice: 850,
            },
            subtotal: 850,
            discount: 0,
            total: 850,
            status: 'processing',
            createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
          },
          {
            id: 'JUSO-BD-8910',
            customerName: 'সাদিয়া ইসলাম',
            phone: '01899887766',
            address: 'জিইসি সার্কেল, নাসিরাবাদ, চট্টগ্রাম',
            deliveryZone: 'outside_dhaka',
            deliveryFee: 0,
            paymentMethod: 'cod',
            item: {
              packageId: 'mega-saver',
              packageName: 'মেগা সেভার হেলথ প্যাক (৪০ টি স্যাশে)',
              quantity: 1,
              unitPrice: 1550,
              totalPrice: 1550,
            },
            subtotal: 1550,
            discount: 0,
            total: 1550,
            status: 'shipped',
            createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
          },
        ];
        setOrders(initialSamples);
        localStorage.setItem('juso_orders', JSON.stringify(initialSamples));
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadOrders();
    }
  }, [isOpen]);

  const updateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    const updated = orders.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o));
    setOrders(updated);
    try {
      localStorage.setItem('juso_orders', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const deleteOrder = (orderId: string) => {
    const updated = orders.filter((o) => o.id !== orderId);
    setOrders(updated);
    try {
      localStorage.setItem('juso_orders', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleExportCSV = () => {
    const headers = ['Order ID,Customer,Phone,Address,Zone,Product,Qty,Total,Status,Date\n'];
    const rows = orders.map(
      (o) =>
        `"${o.id}","${o.customerName}","${o.phone}","${o.address.replace(/"/g, '""')}","${
          o.deliveryZone
        }","${o.item.packageName}","${o.item.quantity}","${o.total}","${o.status}","${o.createdAt}"\n`
    );
    const blob = new Blob([...headers, ...rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `juso_orders_${Date.now()}.csv`;
    link.click();
  };

  if (!isOpen) return null;

  const filteredOrders = filter === 'all' ? orders : orders.filter((o) => o.status === filter);
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-900/60 backdrop-blur-xs flex justify-end">
      <div className="bg-white w-full max-w-2xl h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div>
            <h3 className="font-extrabold text-base text-stone-900 flex items-center gap-2">
              <Package className="w-5 h-5 text-emerald-700" />
              <span>JUSO অর্ডার ম্যানেজমেন্ট ড্যাশবোর্ড</span>
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              মোট অর্ডার: {orders.length} টি | সর্বমোট সেলস: {formatTaka(totalRevenue)}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar & Export */}
        <div className="p-4 border-b border-stone-100 flex flex-wrap items-center justify-between gap-2 bg-white">
          <div className="flex gap-1.5 overflow-x-auto text-xs">
            {(['all', 'pending', 'processing', 'shipped', 'delivered'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setFilter(st)}
                className={`px-3 py-1.5 rounded-lg capitalize font-bold transition-colors ${
                  filter === st
                    ? 'bg-emerald-700 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {st === 'all'
                  ? 'সকল অর্ডার'
                  : st === 'pending'
                  ? 'নতুন (Pending)'
                  : st === 'processing'
                  ? 'প্রসেসিং'
                  : st === 'shipped'
                  ? 'কুরিয়ারে'
                  : 'ডেলিভার্ড'}
              </button>
            ))}
          </div>

          <button
            onClick={handleExportCSV}
            className="px-3 py-1.5 bg-stone-800 hover:bg-stone-900 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CSV ডাউনলোড</span>
          </button>
        </div>

        {/* Orders List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-stone-50/50">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-16 text-stone-400 text-xs">
              কোনো অর্ডার পাওয়া যায়নি।
            </div>
          ) : (
            filteredOrders.map((ord) => (
              <div
                key={ord.id}
                className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs space-y-3"
              >
                {/* Order Top Line */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-mono font-bold text-xs text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {ord.id}
                    </span>
                    <span className="text-[11px] text-stone-400 ml-2">
                      {new Date(ord.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <select
                      value={ord.status}
                      onChange={(e) => updateOrderStatus(ord.id, e.target.value as OrderStatus)}
                      className="text-xs font-bold px-2 py-1 rounded-lg border border-stone-300 bg-white"
                    >
                      <option value="pending">Pending (নতুন)</option>
                      <option value="processing">Processing (প্যাকিং)</option>
                      <option value="shipped">Shipped (কুরিয়ারে)</option>
                      <option value="delivered">Delivered (সম্পন্ন)</option>
                    </select>
                    <button
                      onClick={() => deleteOrder(ord.id)}
                      className="p-1 text-stone-400 hover:text-rose-600 rounded transition-colors"
                      title="মুছে ফেলুন"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="font-bold text-stone-900">{ord.customerName}</p>
                    <p className="text-stone-600 flex items-center gap-1 mt-0.5">
                      <Phone className="w-3 h-3 text-stone-400" />
                      <a href={`tel:${ord.phone}`} className="text-emerald-700 font-mono hover:underline">
                        {ord.phone}
                      </a>
                    </p>
                    <p className="text-stone-500 text-[11px] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                      <span className="truncate">{ord.address}</span>
                    </p>
                  </div>

                  <div className="text-right sm:border-l sm:pl-3 border-stone-100 flex flex-col justify-between">
                    <div>
                      <p className="font-semibold text-stone-800">{ord.item.packageName}</p>
                      <p className="text-[11px] text-stone-500">পরিমাণ: {ord.item.quantity} বক্স</p>
                    </div>
                    <p className="font-mono font-black text-emerald-800 text-sm mt-1">
                      {formatTaka(ord.total)} ({ord.paymentMethod.toUpperCase()})
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 bg-white text-center">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-colors"
          >
            বন্ধ করুন
          </button>
        </div>

      </div>
    </div>
  );
};
