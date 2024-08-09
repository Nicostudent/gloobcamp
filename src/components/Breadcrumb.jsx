'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

// TODO: This looks good, but if we take a look at src/app/(pages)/(public)/content/layout.jsx
// we will see that we are sending an span as a separator, ref: https://dequeuniversity.com/rules/axe/4.4/list?application=axeAPI

const Breadcrumb = ({homeElement, separator, capitalizeLinks}) => {

    // TODO: Shall we move this into a custom hook? something like useBreadCumb?
    // and we can keep the formatLink functionality apart from this file
    // in a utils folder, because likely in the future you will need to re-use this
    // so you can have useBreadcrumb(capitalizeLinks)
    /**
     * useBreadcrumb.js:
     * 
     * export default function useBreadcrumb() {
     * const paths = usePathname()
     *  const pathNames = paths.split('/').filter( path => path )
     * }
     * 
     * and here:
     * 
     * const {pathNames} = useBreadCrumb(capitalizeLinks)
     */
    // Or something like that

    const paths = usePathname()
    const pathNames = paths.split('/').filter( path => path )

    const formatLink = (link) => {
        let formattedLink = link.replace(/-/g, ' ');

        if (capitalizeLinks) {
            formattedLink = formattedLink.charAt(0).toUpperCase() + formattedLink.slice(1);
        }

        return formattedLink;
    }

    return (
        <div>
            <ul className="flex flex-wrap pt-24 bg-transparent">
                <li className="hover:underline mx-2 font-bold"><Link href={'/'}>{homeElement}</Link></li>
                {pathNames.length > 0 && separator}
            {
                pathNames.map( (link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    let itemClasses = paths === href ? "hover:underline mx-2 font-bold text-primary" : "hover:underline mx-2 font-bold"
                    let itemLink = formatLink(link)
                    return (
                        <React.Fragment key={index}>
                            <li className={itemClasses} >
                                <Link href={href}>{itemLink}</Link>
                            </li>
                            {pathNames.length !== index + 1 && separator}
                        </React.Fragment>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Breadcrumb