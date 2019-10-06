import React from "react"
import Link from "@material-ui/core/Link"

const gitHubUrl = "https://github.com/calbatr0ss"

export default function Links() {
    return (
        <>
            <Link href={gitHubUrl} data-testid="github">
                GitHub
            </Link>
        </>
    )
}
