import React from "react"
import Box from "@material-ui/core/Box"
import Link from "@material-ui/core/Link"
import { gitHubUrl, twitterUrl } from "constants/constants"

export default function Links() {
    return (
        <Box display="flex" flexDirection="row">
            <Link href={gitHubUrl} data-testid="github">
                GitHub
            </Link>
            <Link href={twitterUrl} data-testid="twitter">
                Twitter
            </Link>
        </Box>
    )
}
