'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

const TABS = [
    { id: 'all', label: 'All Posts' },
    { id: 'blog', label: 'Blogs' },
    { id: 'article', label: 'Articles' },
];

export default function Healthguide({ initialBlogs = [], initialArticles = [] }) {
    const [blogs, setBlogs] = useState(initialBlogs);
    const [articles, setArticles] = useState(initialArticles);
    const [loading, setLoading] = useState(
        initialBlogs.length === 0 && initialArticles.length === 0
    );
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('all');

    useEffect(() => {
        if (initialBlogs.length > 0 || initialArticles.length > 0) {
            setLoading(false);
            return;
        }
        (async () => {
            try {
                const [b, a] = await Promise.all([
                    axios.get('https://backend.dangsccg.co.in/api/get_blogs/'),
                    axios.get('https://backend.dangsccg.co.in/api/get_articles/'),
                ]);
                setBlogs(b.data.sort((x, y) => x.sequence - y.sequence));
                setArticles(a.data.sort((x, y) => x.sequence - y.sequence));
            } catch {
                setError('Something went wrong. Please refresh the page.');
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const tag = (arr, type) => arr.map(item => ({ ...item, _type: type }));
    const all = [...tag(blogs, 'blog'), ...tag(articles, 'article')];
    const counts = { all: all.length, blog: blogs.length, article: articles.length };
    const visible =
        activeTab === 'all' ? all :
        activeTab === 'blog' ? tag(blogs, 'blog') :
        tag(articles, 'article');

    const [featured, ...rest] = visible;

    if (loading) return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 bg-[#f7f8fc]">
            <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-gray-200 border-t-[#d9242a]" />
            <p className="text-sm font-medium text-gray-400">Loading posts…</p>
        </div>
    );

    if (error) return (
        <div className="flex min-h-[70vh] items-center justify-center bg-[#f7f8fc]">
            <p className="text-sm text-[#d9242a]">{error}</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#f7f8fc]">

            {/* ── Header ── */}
            <div className="bg-white border-b border-gray-100">
                <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-14 pb-0">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-[11px] font-extrabold uppercase tracking-[3.5px] text-[#d9242a]">
                                Dr. Dangs Lab
                            </p>
                            <h1 className="mt-1.5 text-[clamp(44px,7vw,72px)] font-black leading-none tracking-[-2px] text-[#0f172a]">
                                Blog
                            </h1>
                            <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-gray-500">
                                Expert health insights, diagnostic guides and wellness tips from our specialists.
                            </p>
                        </div>
                        <div className="flex shrink-0 items-center gap-3 self-start rounded-2xl border border-[#fde8e8] bg-[#fff5f5] px-5 py-3 text-[13px] font-bold text-[#d9242a] sm:self-auto">
                            <span>{blogs.length} Blogs</span>
                            <span className="h-1 w-1 rounded-full bg-[#f5c0c1]" />
                            <span>{articles.length} Articles</span>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="mt-8 flex gap-1.5 overflow-x-auto [scrollbar-width:none]">
                        {TABS.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={[
                                    'flex shrink-0 items-center gap-2 rounded-t-xl px-5 py-2.5 text-[13px] font-semibold transition-all duration-150',
                                    activeTab === tab.id
                                        ? 'bg-[#f7f8fc] text-[#d9242a] border-t border-x border-gray-100 -mb-px'
                                        : 'text-gray-500 hover:text-gray-800',
                                ].join(' ')}
                            >
                                {tab.label}
                                <span className={[
                                    'rounded-full px-2 py-0.5 text-[11px] font-bold',
                                    activeTab === tab.id ? 'bg-[#fde8e8] text-[#d9242a]' : 'bg-gray-100 text-gray-400',
                                ].join(' ')}>
                                    {counts[tab.id]}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Content ── */}
            <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10">
                {visible.length === 0 ? (
                    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-gray-200 bg-white">
                        <svg className="h-10 w-10 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                        <p className="text-sm text-gray-400">No posts found.</p>
                    </div>
                ) : (
                    <>
                        {/* Featured */}
                        {featured && <FeaturedPost item={featured} />}

                        {/* Grid */}
                        {rest.length > 0 && (
                            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {rest.map(item => (
                                    <PostCard key={`${item._type}-${item.id}`} item={item} />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

/* ── Featured Post ── */
function FeaturedPost({ item }) {
    const type = item._type;
    const heading = item[`${type}_heading`];
    const imgPath = item[`${type}_thumbnail_image`];
    const imgSrc = imgPath ? `https://backend.dangsccg.co.in${imgPath}` : null;
    const href = `/${type}s/${item.url_name}`;
    const label = type === 'blog' ? 'Blog' : 'Article';
    const date = item.release_date
        ? new Date(item.release_date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
        : null;
    const desc = item.meta_description || null;

    return (
        <Link
            href={href}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(217,36,42,0.12)] sm:flex-row"
        >
            {/* Image */}
            <div className="relative h-56 shrink-0 overflow-hidden bg-gray-100 sm:h-auto sm:w-[48%]">
                {imgSrc ? (
                    <Image
                        src={imgSrc}
                        alt={item.thumbnail_alt_text || heading}
                        fill
                        sizes="(max-width: 640px) 100vw, 48vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                    />
                ) : (
                    <PlaceholderImg />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent sm:bg-gradient-to-r" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-center gap-4 p-7 sm:p-10">
                <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[#d9242a] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[1px] text-white">
                        {label}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#fde8e8] bg-[#fff5f5] px-3 py-1 text-[11px] font-bold uppercase tracking-[1px] text-[#d9242a]">
                        Featured
                    </span>
                </div>

                <h2 className="text-[clamp(20px,2.5vw,28px)] font-extrabold leading-tight tracking-tight text-[#0f172a] transition-colors duration-200 group-hover:text-[#d9242a] line-clamp-3">
                    {heading}
                </h2>

                {desc && (
                    <p className="text-[14.5px] leading-relaxed text-gray-500 line-clamp-3">{desc}</p>
                )}

                <div className="flex items-center justify-between">
                    {date && <span className="text-[12.5px] font-medium text-gray-400">{date}</span>}
                    <span className="ml-auto flex items-center gap-1.5 text-[13.5px] font-bold text-[#d9242a]">
                        Read article
                        <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </div>
            </div>
        </Link>
    );
}

/* ── Grid Card ── */
function PostCard({ item }) {
    const type = item._type;
    const heading = item[`${type}_heading`];
    const imgPath = item[`${type}_thumbnail_image`];
    const imgSrc = imgPath ? `https://backend.dangsccg.co.in${imgPath}` : null;
    const href = `/${type}s/${item.url_name}`;
    const label = type === 'blog' ? 'Blog' : 'Article';
    const date = item.release_date
        ? new Date(item.release_date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
        : null;
    const desc = item.meta_description || null;

    return (
        <Link
            href={href}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(217,36,42,0.1)]"
        >
            {/* Image */}
            <div className="relative h-52 overflow-hidden bg-gray-100">
                {imgSrc ? (
                    <Image
                        src={imgSrc}
                        alt={item.thumbnail_alt_text || heading}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                    />
                ) : (
                    <PlaceholderImg />
                )}
                {/* Category badge */}
                <span className="absolute left-3 top-3 rounded-full bg-[#d9242a] px-3 py-1 text-[10.5px] font-extrabold uppercase tracking-[1px] text-white shadow-[0_2px_8px_rgba(217,36,42,0.35)]">
                    {label}
                </span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col gap-3 p-5">
                {date && (
                    <span className="text-[11.5px] font-semibold uppercase tracking-[0.5px] text-gray-400">
                        {date}
                    </span>
                )}
                <h3 className="flex-1 text-[15.5px] font-extrabold leading-snug tracking-tight text-[#0f172a] line-clamp-3 transition-colors duration-200 group-hover:text-[#d9242a]">
                    {heading}
                </h3>
                {desc && (
                    <p className="text-[13px] leading-relaxed text-gray-400 line-clamp-2">{desc}</p>
                )}
                <span className="mt-1 flex items-center gap-1.5 text-[13px] font-bold text-[#d9242a]">
                    Read more
                    <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            </div>
        </Link>
    );
}

function PlaceholderImg() {
    return (
        <div className="flex h-full w-full items-center justify-center bg-[#fdf2f2]">
            <svg className="h-10 w-10 text-[#f5c0c1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        </div>
    );
}
